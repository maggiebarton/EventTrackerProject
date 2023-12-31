package com.skilldistillery.sneakers.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class SneakerTest {
	
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Sneaker sneaker;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("JPASneakers");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		sneaker = em.find(Sneaker.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		sneaker = null;
	}

	@Test
	void test_basic_mapping() {
	assertNotNull(sneaker);
	assertEquals("Boba Fett", sneaker.getName());
	assertEquals(110, sneaker.getRetailPrice());
	assertEquals(2020, sneaker.getReleaseDate().getYear());
	assertEquals(8, sneaker.getSize());
	}
	
	@Test
	void test_MTO_Brand_mapping() {
	assertNotNull(sneaker);
	assertEquals("Adidas x Star Wars", sneaker.getBrand().getName());
	}
	
	@Test
	void test_MTO_Condition_mapping() {
	assertNotNull(sneaker);
	assertEquals("Used - Like New", sneaker.getCondition().getTitle());
	}

}
