package com.clawscndcheese.clawsandcheese;

import java.util.ArrayList;
import java.util.List;
import org.springframework.web.socket.WebSocketSession;

public class Game {
    
    List<Account> jugadores = new ArrayList();
    int id;
    
    public Game(int id){
    
        this.id = id;
    
    }
    public void addAccount(Account account){
        
        this.jugadores.add(account);
    
    }
 
    public int getId(){
    
        return this.id;
    
    }
    
}