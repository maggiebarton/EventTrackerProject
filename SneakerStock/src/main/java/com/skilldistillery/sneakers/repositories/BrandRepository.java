package com.skilldistillery.sneakers.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.sneakers.entities.Brand;

public interface BrandRepository extends JpaRepository<Brand, Integer> {
	Brand searchById(int brandId);
}
