package com.clawscndcheese.clawsandcheese;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

@Component
public class WebsocketEchoHandler extends TextWebSocketHandler {

    private Map<String, WebSocketSession> sessions = new ConcurrentHashMap<>();
    private ObjectMapper mapper = new ObjectMapper();
    public static Map<Integer, Game> partidas = new HashMap<>();
    private int numP = 0;
    private int contador = 0;
    private Game aux;
    public String[] nombre = new String[2];

    @Autowired
    private AccountController accountController;

    void Match(WebSocketSession session, long player_id) throws Exception {
		Thread.sleep(1000);
        nombre[0] = "Cheese";
        nombre[1] = "Claws";
        try {
            if (contador == 0) {
                newGame();
            }

            if (contador < 2) {
                Game actual = partidas.get(partidas.size() - 1);
                System.out.println("New user: " + session.getId() + " Partida: " + aux.getId());
                sessions.put(session.getId(), session);
                System.out.println("Id partida: " + actual.getId());

                // Obtener el jugador de AccountController
                Account player = accountController.getAccountMap().get(player_id);
				player.session = session;
				player.id_partida = actual.getId();
                actual.addAccount(player);

                contador++;
                System.out.println("Nuevo jugador");

                // CAN MODIFY
                ObjectNode newNode = mapper.createObjectNode();
                newNode.put("funcion", "setPlayer");
                newNode.put("name", nombre[contador-1]);
                newNode.put("id", actual.jugadores.get(actual.jugadores.size() - 1).getId());
                newNode.put("id_p", actual.getId());
                actual.jugadores.get(actual.jugadores.size() - 1).getSession().sendMessage(new TextMessage(newNode.toString()));
                System.out.println("mensaje enviado creo");

                if (contador == 2) {
					System.out.print("Entra en contador echoHandler");;
                    contador = 0;
                }
				System.out.print("sale en contador echoHandler");;

            }

        } catch (Exception e) {
            System.out.println(e);
        }
    }

    public void newGame() {
        aux = new Game(numP);
        partidas.put(aux.getId(), aux);
        numP++;
        System.out.println("Nueva partida");
    }

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        // Match(session);
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        System.out.println("Session closed: " + session.getId());
        sessions.remove(session.getId());
    }

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        System.out.println("Message received: " + message.getPayload());
        JsonNode node = mapper.readTree(message.getPayload());

        if (node.get("nueva_partida") != null && node.get("player_id") != null) {
            Match(session, node.get("player_id").asLong());
        } else if (node.get("destruir") != null) {
            partidas.remove(node.get("id_p").asInt());
            System.out.println("Se destruye partida " + node.get("id_p").asInt());
        } else {
            sendOtherParticipants(session, node);
        }
    }

    private void sendOtherParticipants(WebSocketSession session, JsonNode node) throws Exception {
        int idP = node.get("id_p").asInt();
        Long idJ = node.get("id").asLong();
        ObjectNode newNode = mapper.createObjectNode();

		newNode.put("funcion", "update");

		newNode.put("characterName",node.get("characterName").asText());
		newNode.put("name", node.get("name").asText());
		newNode.put("id", node.get("id").asLong());
		newNode.put("posX", node.get("posX").asInt());
		newNode.put("posY", node.get("posY").asInt());
		newNode.put("key_found", node.get("key_found").asBoolean());
		newNode.put("door_open", node.get("door_open").asBoolean());
		newNode.set("listaCajas", node.get("listaCajas")); // Añadir la lista de cajas al mensaje


		//newNode.put("spdX", node.get("spdX").asInt());
		//newNode.put("spdY", node.get("spdY").asInt());
		//newNode.put("state", node.get("state").asText());
		//newNode.put("texture", node.get("texture").asText());

		for (Account participant : partidas.get(idP).jugadores) {
			if (participant.getId() != idJ) {
				participant.getSession().sendMessage(new TextMessage(newNode.toString()));
			}
		}
    }
}
