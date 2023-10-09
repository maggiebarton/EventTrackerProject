package com.skilldistillery.sneakers.services;

import java.util.List;

import com.skilldistillery.sneakers.entities.Sneaker;

public interface SneakerService {
	
	List<Sneaker> showAllSneakers();
	Sneaker showSingleSneaker(int sneakerId);
	Sneaker createNewSneaker(Sneaker sneaker);
	Sneaker updateSneaker(int sneakerId, Sneaker sneaker);
	boolean deleteSneaker(int sneakerId);
	List<Sneaker> showAllSneakersForSingleBrand(int brandId);
}
