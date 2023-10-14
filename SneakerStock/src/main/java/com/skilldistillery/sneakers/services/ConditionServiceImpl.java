package com.skilldistillery.sneakers.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.sneakers.entities.Condition;
import com.skilldistillery.sneakers.repositories.ConditionRepository;

@Service
public class ConditionServiceImpl implements ConditionService {

	@Autowired
	private ConditionRepository condRepo;
	
	@Override
	public List<Condition> showAllConditions() {
		return condRepo.findAll();
	}

}
