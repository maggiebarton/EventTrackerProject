package com.skilldistillery.sneakers.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.sneakers.entities.Sneaker;
import com.skilldistillery.sneakers.services.SneakerService;

@RestController
@RequestMapping("api")
public class SneakerController {

	@Autowired
	private SneakerService ss;

	@GetMapping("sneakers")
	public List<Sneaker> showAllSneakers() {
		return ss.showAllSneakers();
	}

	@GetMapping("sneakers/{sneakerId}")
	public Sneaker showSingleSneaker(@PathVariable int sneakerId, HttpServletResponse resp) {
		Sneaker sneaker = ss.showSingleSneaker(sneakerId);
		if (sneaker == null) {
			resp.setStatus(404);
		}
		return sneaker;
	}

	@PostMapping("sneakers")
	public Sneaker createNewSneaker(@RequestBody Sneaker sneaker, HttpServletResponse resp, HttpServletRequest req) {
		Sneaker createdSneaker = null;
		try {
			createdSneaker = ss.createNewSneaker(sneaker);
			resp.setStatus(201);
			StringBuffer url = req.getRequestURL();
			url.append("/").append(createdSneaker.getId());
			resp.setHeader("Location", url.toString());
		} catch (Exception e) {
			e.printStackTrace();
			resp.setStatus(400);
		}
		return createdSneaker;
	}

	@PutMapping("sneakers/{sneakerId}")
	public Sneaker updateSneaker(@RequestBody Sneaker sneaker, @PathVariable int sneakerId, HttpServletResponse resp) {
		Sneaker updatedSneaker = null;
		try {
			updatedSneaker = ss.updateSneaker(sneakerId, sneaker);
			if (updatedSneaker == null) {
				resp.setStatus(404);
			}
		} catch (Exception e) {
			resp.setStatus(400);
			e.printStackTrace();
		}
		return updatedSneaker;
	}

	@DeleteMapping("sneakers/{sneakerId}")
	public void deleteSneaker(@PathVariable int sneakerId, HttpServletResponse resp) {
		try {
			if (ss.deleteSneaker(sneakerId)) {
				resp.setStatus(204);
			} else {
				resp.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			resp.setStatus(400);
		}
	}
	
	@GetMapping("brands/{brandId}/sneakers")
	public List<Sneaker> getAllSneakersForSpecificBrand(@PathVariable int brandId, HttpServletResponse resp){
		List<Sneaker> sneakers = ss.showAllSneakersForSingleBrand(brandId);
		if(sneakers == null) {
			resp.setStatus(404);
		}
		return sneakers;
	}

}
