class BankAccount:
    # don't forget to add some default values for these parameters!
    def __init__(self, int_rate =.05, balance = 0): 
        self.int_rate = int_rate
        self.balance = balance
        

        self.yield_interest()
        # your code here! (remember, instance attributes go here)
        # don't worry about user info here; we'll involve the User class soon
    def deposit(self, amount):
        self.balance += amount
        return self

        # your code here
    def withdraw(self, amount):
        if self.balance < amount:
            self.balance -= 5
            print(f'{self.balance} + "insufficient funds"')
            return self
        else:
            self.balance -= amount
            return self
        # your code here
    def display_account_info(self):
        print(f"your balance is {self.balance}")
        
        return self
        # your code here
    def yield_interest(self):
        if self.balance > 0:
            self.balance = self.balance * (1+self.int_rate)
            return self
        # your code here

user1=BankAccount(.05)
print(user1.int_rate)
user1.display_account_info().deposit(5).withdraw(4)