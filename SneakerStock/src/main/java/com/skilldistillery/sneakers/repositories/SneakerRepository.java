package com.skilldistillery.sneakers.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.sneakers.entities.Sneaker;

public interface SneakerRepository extends JpaRepository<Sneaker, Integer> {
	Sneaker searchById(int sneakerId);
	List<Sneaker> findByBrandId(int brandId);
}
