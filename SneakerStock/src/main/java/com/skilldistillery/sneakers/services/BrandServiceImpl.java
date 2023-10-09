package com.skilldistillery.sneakers.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.sneakers.entities.Brand;
import com.skilldistillery.sneakers.repositories.BrandRepository;

@Service
public class BrandServiceImpl implements BrandService {
	
	@Autowired
	private BrandRepository brandRepo;

	@Override
	public List<Brand> showAllBrands() {
		return brandRepo.findAll();
	}

}
