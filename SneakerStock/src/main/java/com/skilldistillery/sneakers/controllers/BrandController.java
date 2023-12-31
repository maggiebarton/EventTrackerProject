package com.skilldistillery.sneakers.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.sneakers.entities.Brand;
import com.skilldistillery.sneakers.services.BrandService;

@CrossOrigin({"*", "http://localhost/"})
@RestController
@RequestMapping("api")
public class BrandController {

	@Autowired
	private BrandService bs;
	
	@GetMapping("sneakers/brands")
	public List<Brand> showAllBrands(){
		return bs.showAllBrands();
	}
}
