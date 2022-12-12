import random
class character:

    def __init__( self , name , strength, speed, health, initiative= random.randint(1, 20) ):
        self.name = name
        self.strength = strength
        self.speed = speed
        self.health = health
        self.alive = True
        self.initiative = initiative
    
    def show_stats( self ):
        print(f"Name: {self.name}\nStrength: {self.strength}\nSpeed: {self.speed}\nHealth: {self.health}\n")

    def attack( self , enemy ):
        #check if damage hits
        rand = random.randint(1,10)
        if(rand - self.speed <= 0):
            print("attack misses")
        else:

        #deal damage
            rand2 = random.randint(1,10)
            damage = self.strength + rand2
            enemy.health -= damage

        if enemy.health < 1:
            enemy.health = 0
            enemy.alive = False
        return self

