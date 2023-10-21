package com.skilldistillery.sneakers.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.sneakers.entities.Condition;
import com.skilldistillery.sneakers.services.ConditionService;

@CrossOrigin({"*", "http://localhost/"})
@RestController
@RequestMapping("api")
public class ConditionController {

	@Autowired
	private ConditionService cs;
	
	@GetMapping("sneakers/conditions")
	public List<Condition> showAllConditions(){
		return cs.showAllConditions();
	}
}
