package com.skilldistillery.sneakers.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.sneakers.entities.Sneaker;
import com.skilldistillery.sneakers.services.SneakerService;

@RestController
@RequestMapping("api")
public class SneakerController {
	
	@Autowired
	private SneakerService ss;
	
	@GetMapping("sneakers")
	public List<Sneaker> showAllSneakers(){
		return ss.showAllSneakers();
	}

}
