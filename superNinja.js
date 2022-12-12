class Ninja {
    constructor(name, health=10, speed=3, strength=3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(`My name is ${this.name}`);
        return this;
    }

    showStats() {
        console.log(`Name:    ${this.name}`);
        console.log(`Health:  ${this.health}`);
        console.log(`Speed:   ${this.speed}`);
        console.log(`Stength: ${this.strength}`);
        return this;
    }

    drinkSake() {
        console.log(`${this.name} drank sake.`);
        this.health += 10;
        return this;
    }
}

const ninja1 = new Ninja("Ryu");
ninja1.sayName().showStats().drinkSake().showStats();


class Sensei extends Ninja{
    constructor(name, wisdom=10){
        super(name, 200, 10, 10, wisdom);
    }

    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }

    showStats(){
        super.showStats();
    }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();

// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
