package com.skilldistillery.sneakers.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class BrandTest {
	
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Brand brand;

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
		brand = em.find(Brand.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		brand = null;
	}

	@Test
	void test_basic_mapping() {
	assertNotNull(brand);
	assertEquals("Nike", brand.getName());

	}
	
	@Test
	void test_OTM_Sneaker_mapping() {
	assertNotNull(brand);
	assertTrue(brand.getSneakers().size() > 0);

	}

}
