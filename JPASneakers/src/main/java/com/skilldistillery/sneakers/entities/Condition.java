package com.skilldistillery.sneakers.entities;

import java.util.List;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name ="shoe_condition")
public class Condition {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String title;
	private String description;
	
	@JsonIgnore
	@OneToMany (mappedBy="condition")
	List<Sneaker> sneakers;
	
	public Condition() {
		super();
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public List<Sneaker> getSneakers() {
		return sneakers;
	}
	public void setSneakers(List<Sneaker> sneakers) {
		this.sneakers = sneakers;
	}
	@Override
	public int hashCode() {
		return Objects.hash(id);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Condition other = (Condition) obj;
		return id == other.id;
	}
	@Override
	public String toString() {
		return "Condition [id=" + id + ", title=" + title + ", description=" + description + "]";
	}
	
	

}
