package com.caresoft.clincapp;

public class User {
    protected Integer id;
    protected int pin;
    
    public User(Integer id) {
		super();
		this.id = id;
	}
    
    public Integer getId() {
		return id;
	}



	public void setId(Integer id) {
		this.id = id;
	}



	public int getPin() {
		return pin;
	}



	public void setPin(int pin) {
		this.pin = pin;
	}
    // TO DO: Getters and setters
	// Implement a constructor that takes an ID
}