package com.skilldistillery.sneakers.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.sneakers.entities.Condition;

public interface ConditionRepository extends JpaRepository<Condition, Integer> {
	Condition searchById(int brandId);
}
