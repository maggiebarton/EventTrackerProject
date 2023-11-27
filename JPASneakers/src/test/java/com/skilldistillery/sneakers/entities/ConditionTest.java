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

class ConditionTest {
	
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Condition condition;

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
		condition = em.find(Condition.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		condition = null;
	}

	@Test
	void test_basic_mapping() {
	assertNotNull(condition);
	assertEquals("New", condition.getTitle());
	assertEquals("Brand new, never worn", condition.getDescription());

	}
	

}
