package com.wilds.zookeeper;

public class GorillaTest {

	public static void main(String[] args) {
		Gorilla kong = new Gorilla(50);
		kong.throwThings();
		kong.displayEnergyLevel();
		kong.throwThings();
		kong.displayEnergyLevel();
		kong.throwThings();
		kong.displayEnergyLevel();
		kong.eatBananas();
		kong.displayEnergyLevel();
		kong.eatBananas();
		kong.displayEnergyLevel();
		kong.climb();
		kong.displayEnergyLevel();

	}

}
