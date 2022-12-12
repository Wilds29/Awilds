package com.wilds.zookeeper;

public class Bat extends Mammal {



	public Bat(int energyLevel) {
		super(energyLevel);
	}
	
	public void fly() {
		System.out.println("THE BAT IS FLYING!");
		this.energyLevel -= 50;
	}
	
	public void eatHumans() {
		System.out.println("SO-- WELL, NVM");
		this.energyLevel += 25;
	}
	
	public void attackTown() {
		System.out.println("THE DRACULA IS HERE!");
		this.energyLevel -= 100;
	}
}
	
	
