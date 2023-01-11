package com.example.demo;

import java.util.Properties;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.expression.EnvironmentAccessor;
import org.springframework.core.env.Environment;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;

import io.micrometer.observation.Observation.Event;

@SpringBootApplication
public class SpringBootAngularApplication {
	
	public static void main(String[] args) {
		
		ApplicationContext context =SpringApplication.run(SpringBootAngularApplication.class, args);
		
		UserRepository urepo = context.getBean(UserRepository.class);
	
	}

}
