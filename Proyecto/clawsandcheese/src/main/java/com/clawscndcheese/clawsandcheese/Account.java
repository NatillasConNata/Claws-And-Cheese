package com.clawscndcheese.clawsandcheese;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.web.socket.WebSocketSession;

public class Account {
    public long id;
    public String name;
    private String password;
    private boolean active;
    private float timer;
    public boolean inGame;
    int id_partida;
    
    @JsonIgnore // Ignorar esta propiedad durante la serializaciÃ³n
    WebSocketSession session;

    public Account() {
    }

    public Account(long id, String name, String pas, boolean act, float time) {
        this.id = id;
        this.name = name;
        this.password = pas;
        this.active = act;
        this.timer = time;
        this.id_partida = -1;
        this.session = null;
    }

    public Account(long id, String name, String pas, boolean act, float time, int ip, WebSocketSession s) {
        this.id = id;
        this.name = name;
        this.password = pas;
        this.active = act;
        this.timer = time;
        this.id_partida = ip;
        this.session = s;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean getActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public float getTime() {
        return timer;
    }

    public void setTime(float times) {
        this.timer = times;
    }

    public int getid_partida() {
        return id_partida;
    }

    public void setid_partida(int times) {
        this.id_partida = times;
    }

    public WebSocketSession getSession() {
        return session;
    }

    public void setSession(WebSocketSession times) {
        this.session = times;
    }

    @Override
    public String toString() {
        return "Account [id=" + id + ", name=" + name + ", password=" + password + ", active=" + active + "]";
    }
}