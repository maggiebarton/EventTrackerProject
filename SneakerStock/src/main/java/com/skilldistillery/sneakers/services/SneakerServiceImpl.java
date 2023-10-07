package com.skilldistillery.sneakers.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.sneakers.entities.Sneaker;
import com.skilldistillery.sneakers.repositories.SneakerRepository;

@Service
public class SneakerServiceImpl implements SneakerService {
	
	@Autowired
	private SneakerRepository sneakerRepo;

	@Override
	public List<Sneaker> showAllSneakers() {
		return sneakerRepo.findAll();
	}

	@Override
	public Sneaker showSingleSneaker(int sneakerId) {
		return sneakerRepo.searchById(sneakerId);
	}

	@Override
	public Sneaker createNewSneaker(Sneaker sneaker) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Sneaker updateSneaker(int sneakerId, Sneaker sneaker) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean deleteSneaker(int sneakerId) {
		// TODO Auto-generated method stub
		return false;
	}

}
