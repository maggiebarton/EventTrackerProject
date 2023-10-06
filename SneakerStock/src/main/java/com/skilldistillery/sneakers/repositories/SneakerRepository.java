package com.skilldistillery.sneakers.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.sneakers.entities.Sneaker;

public interface SneakerRepository extends JpaRepository<Sneaker, Integer> {

}
