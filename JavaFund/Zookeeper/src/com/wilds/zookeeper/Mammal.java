package com.wilds.zookeeper;

public class Mammal {
	protected int energyLevel;
	public Mammal(int energyLevel) {
		this.energyLevel = energyLevel;
	}
	void displayEnergyLevel() {
		System.out.println("Energy Level: " + this.energyLevel);
	}
}
