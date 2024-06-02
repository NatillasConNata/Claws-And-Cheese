package com.clawscndcheese.clawsandcheese;

import java.util.Properties;

import java.util.Properties;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

@SpringBootApplication
@EnableWebSocket
public class ClawsandcheeseApplication  implements WebSocketConfigurer{

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
    	registry.addHandler(createGame(), "/echo").setAllowedOrigins("*");
    }

	
	@Bean
	public WebsocketEchoHandler createGame() {
		return new WebsocketEchoHandler();
	}
	
	public static void main(String[] args) {
		SpringApplication app = new SpringApplication(ClawsandcheeseApplication.class);
        Properties properties = new Properties();
        properties.setProperty("spring.resources.staticLocations","classpath:/static/");
        app.setDefaultProperties(properties);
        app.run(args);
	}
}