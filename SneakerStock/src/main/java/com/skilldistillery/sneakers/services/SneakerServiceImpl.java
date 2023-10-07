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
		sneakerRepo.saveAndFlush(sneaker);
		return sneaker;
	}

	@Override
	public Sneaker updateSneaker(int sneakerId, Sneaker sneaker) {
		Sneaker managedSneaker = sneakerRepo.searchById(sneakerId);
		if (managedSneaker != null) {
			managedSneaker.setCollection(sneaker.getCollection());
			managedSneaker.setName(sneaker.getName());
			managedSneaker.setSize(sneaker.getSize());
			managedSneaker.setRetailPrice(sneaker.getRetailPrice());
			managedSneaker.setReleaseDate(sneaker.getReleaseDate());
			managedSneaker.setAcquisitionDate(sneaker.getAcquisitionDate());
			managedSneaker.setColorway(sneaker.getColorway());
			managedSneaker.setBox(sneaker.isBox());
			managedSneaker.setImageURL(sneaker.getImageURL());
			if (sneaker.getBrand() != null) {
				managedSneaker.setBrand(sneaker.getBrand());
			}
			if (sneaker.getCondition() != null) {
				managedSneaker.setCondition(sneaker.getCondition());
			}
			sneakerRepo.saveAndFlush(managedSneaker);
		}
		return managedSneaker;
	}

	@Override
	public boolean deleteSneaker(int sneakerId) {
		boolean deleted = false;
		Sneaker sneakerToDelete = sneakerRepo.searchById(sneakerId);
		if (sneakerToDelete != null) {
			sneakerRepo.delete(sneakerToDelete);
			deleted = true;
		}
		return deleted;
	}

}
