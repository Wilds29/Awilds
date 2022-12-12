from random import random
from classes.character import character


class Pirate(character):

    def __init__( self , name = "pirate" , strength = 10, speed = 3, health = 100, initiative = random.randint(1,20) ):
        super().__init__(name , strength, speed, health, initiative)
        

    def show_stats( self ):
        print(f"Name: {self.name}\nStrength: {self.strength}\nSpeed: {self.speed}\nHealth: {self.health}\n")


