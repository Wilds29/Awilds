package com.wilds.zookeeper;

public class Gorilla extends Mammal {
	

	public Gorilla(int energyLevel) {
		super(energyLevel);
	}

	
	public void eatBananas() {
		System.out.println("The gorilla is eating bananas!");
		this.energyLevel += 10;
	}
	
	public void climb() {
		System.out.println("The gorilla is climbing a tree!");
		this.energyLevel -= 10;
	}
	
	public void throwThings() {
		System.out.println("The gorilla is throwing Stuff!");
		this.energyLevel -= 5;
	}
}