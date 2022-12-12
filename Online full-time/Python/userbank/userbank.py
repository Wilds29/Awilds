from unicodedata import name


class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = BankAccount(int_rate=0.02, balance= 0)

    def makedeposit(self, amount):
        self.account.deposit(amount)
        print(self.account.balance)
        return self

    def makewithdraw(self, amount):
        self.account.withdraw(amount)
        print(self.account.balance)
        return self

    def displaybalance(self):
        self.account.display_account_info()
        return self
    
    # other methods
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

user1 = User("bob", "email@gmail.com")

user1.makewithdraw(5).makedeposit(10).displaybalance()

