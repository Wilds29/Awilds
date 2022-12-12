from random import random
from classes.ninja import Ninja
from classes.pirate import Pirate

Shen = Ninja("Shen", 5, 3, 120, random.randint(1,20))

Gangplank = Pirate("Gangplank", 8, 5, 100, random.randint(1, 20))

Shen.attack(Gangplank)
Gangplank.show_stats()
Shen.show_stats()