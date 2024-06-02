package com.clawscndcheese.clawsandcheese;

import java.io.Console;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Collection;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

import org.apache.logging.log4j.message.Message;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;

import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;

@RestController
@RequestMapping("/accounts")
@CrossOrigin(origins = "http://localhost:4200")
public class AccountController {

    public Map<Long, Account> accounts = new ConcurrentHashMap<>();
    private AtomicLong nextId = new AtomicLong(1);

    @Value("${json.file.path}")
    //private String jsonFilePath;
    private static final String jsonFilePath = "src/main/resources/static/playerscore.json";
    private static final String tempJsonFilePath = "src/main/resources/static/playerscore_temp.json";

    // Método para obtener el mapa de cuentas
    public Map<Long, Account> getAccountMap() {
        return accounts;
    }
    //ejecutar codigo de leerJSON al inicio
    @PostConstruct
public void init() {
    if (accounts.isEmpty()) {
        try {
            File jsonFile = new File(jsonFilePath);
            if (jsonFile.exists()) {
                FileReader reader = new FileReader(jsonFilePath);
                Gson gson = new GsonBuilder().setPrettyPrinting().create();
                JsonObject jsonObject = gson.fromJson(reader, JsonObject.class);

                JsonArray playerScores = jsonObject.getAsJsonArray("playerscores");
                if (playerScores != null) {
                    for (JsonElement element : playerScores) {
                        JsonObject accountJson = element.getAsJsonObject();
                        long id = accountJson.get("id").getAsLong();
                        String name = accountJson.get("name").getAsString();
                        String password = accountJson.get("password").getAsString();
                        float timer = accountJson.get("time").getAsFloat();

                        accounts.put(id, new Account(id, name, password, false, timer));
                    }
                }
                reader.close();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

    @GetMapping
    public  Collection<Account> getAccounts() {
        
        return accounts.values();
    }

    @PostMapping
    public synchronized Account addAccount(@RequestBody Account account) {
        //que el id que se cree no se solape con otros ids
        long id = nextId.getAndIncrement();
        System.out.println(accounts.size());

        while (id<=accounts.size()) {
            id = nextId.getAndIncrement();
        }
        account.setId(id);
        accounts.put(id, account);

        // Lógica para actualizar el archivo JSON
        synchronized (this) {
            FileReader reader = null;
            FileWriter writer = null;
            try {
                File jsonFile = new File(jsonFilePath);
                System.out.print(jsonFile);
                if (!jsonFile.exists()) {
                    jsonFile.createNewFile();
                    // Inicializar el archivo con un objeto JSON vacío si no existe
                    writer = new FileWriter(jsonFilePath);
                    JsonObject initialJson = new JsonObject();
                    initialJson.add("playerscores", new JsonArray());
                    Gson gson = new GsonBuilder().setPrettyPrinting().create();
                    gson.toJson(initialJson, writer);
                    writer.close();
                }

                // Leer el archivo JSON original
                reader = new FileReader(jsonFilePath);
                Gson gson = new GsonBuilder().setPrettyPrinting().create();
                JsonObject jsonObject = gson.fromJson(reader, JsonObject.class);

                // Obtener la lista de puntuaciones de jugadores
                JsonArray playerScores = jsonObject.getAsJsonArray("playerscores");
                if (playerScores == null) {
                    playerScores = new JsonArray();
                }

                // Crear un nuevo objeto de puntuación
                JsonObject newScore = new JsonObject();
                newScore.addProperty("id", id);
                newScore.addProperty("name", account.getName());
                newScore.addProperty("password", account.getPassword());
                newScore.addProperty("active", account.getActive());
                newScore.addProperty("time", account.getTime());

                // Añadir la nueva puntuación a la lista
                playerScores.add(newScore);
                jsonObject.add("playerscores", playerScores);

                // Escribir el contenido actualizado en un archivo temporal
                writer = new FileWriter(tempJsonFilePath);
                gson.toJson(jsonObject, writer);

                // Cerrar el escritor para asegurarse de que el contenido se guarda
                writer.close();

                // Asegurarse de que el archivo original se cierre antes de reemplazarlo
                reader.close();

                // Reemplazar el archivo original con el archivo temporal
                Files.delete(Paths.get(jsonFilePath));  // Borrar el archivo original
                Files.move(Paths.get(tempJsonFilePath), Paths.get(jsonFilePath));  // Mover el archivo temporal al original

            } catch (IOException e) {
                e.printStackTrace();
            } finally {
                try {
                    if (reader != null) {
                        reader.close();
                    }
                    if (writer != null) {
                        writer.close();
                    }
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }

        return account;
    }

    @PutMapping("/{id}")
public synchronized ResponseEntity<Account> updateAccount(
    @PathVariable long id, 
    @RequestBody Account updatedAccount) {
    Account savedAccount = accounts.get(id);

    if (savedAccount != null) {
        accounts.put(id, updatedAccount);

        // Guardar los cambios en el archivo JSON
        saveAccountsToFile();

        return new ResponseEntity<>(updatedAccount, HttpStatus.OK);
    } else {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}

    @GetMapping("/{id}")
    public  ResponseEntity<Account> getAccount(@PathVariable long id) {
        Account savedAccount = accounts.get(id);

        if (savedAccount != null) {
            return new ResponseEntity<>(savedAccount, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public synchronized ResponseEntity<Account> eraseAccount(@PathVariable long id) {
        Account savedAccount = accounts.get(id);

        if (savedAccount != null) {
            accounts.remove(id);

            // Guardar los cambios en el archivo JSON
            saveAccountsToFile();

            return new ResponseEntity<>(savedAccount, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    @PreDestroy
public void saveAccountsToFile() {
    // Lógica para guardar la información de las cuentas en el archivo JSON
    synchronized (this) {
        FileWriter writer = null;
        try {
            File jsonFile = new File(jsonFilePath);
            if (!jsonFile.exists()) {
                jsonFile.createNewFile();
            }

            JsonObject jsonObject = new JsonObject();
            JsonArray playerScores = new JsonArray();
            for (Account account : accounts.values()) {
                JsonObject accountJson = new JsonObject();
                accountJson.addProperty("id", account.getId());
                accountJson.addProperty("name", account.getName());
                accountJson.addProperty("password", account.getPassword());
                accountJson.addProperty("active", account.getActive());
                accountJson.addProperty("time", account.getTime());
                playerScores.add(accountJson);
            }
            jsonObject.add("playerscores", playerScores);

            writer = new FileWriter(jsonFilePath);
            Gson gson = new GsonBuilder().setPrettyPrinting().create();
            gson.toJson(jsonObject, writer);

        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                if (writer != null) {
                    writer.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
}