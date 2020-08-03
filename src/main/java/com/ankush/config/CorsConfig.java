package com.ankush.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {
	
	@Bean
	public WebMvcConfigurer corsConfigure() {
		
		return new WebMvcConfigurer() {
			
			
		/*	public void addCorsMapping(CorsRegistry registry) {
				
				
				registry.addMapping("/**")
				.allowedMethods("GET","PUT","DELETE","POST")
				.allowedHeaders("*")
				.allowedOrigins("http://localhost:3000");
				
				
			}*/
			
			
			  @Override
			  
			  
			  public void addCorsMappings(CorsRegistry registry) {
			
			  
			  
			  registry.addMapping("/**") .allowedMethods("GET","DELETE","PUT","POST")
			  .allowedHeaders("*") .allowedOrigins("http://localhost:3000");
			  
			  }
			  
			 	
			
			
			  @Override 
			  public void addResourceHandlers(ResourceHandlerRegistry registry) {
			  
			  WebMvcConfigurer.super.addResourceHandlers(registry);
			  
			  registry.addResourceHandler("/src/**").addResourceLocations(
			  "/src/");
			  
			  }
			 
			
 		};
	}
	

}
