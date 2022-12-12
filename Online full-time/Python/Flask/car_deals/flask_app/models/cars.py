import re  # the regex module

from flask import flash, session
from flask_app import DATABASE, app
from flask_app.config.mysqlconnections import MySQLConnection, connectToMySQL
from flask_app.models import users


class Car:
    # using a class variable to hold my database name

    def __init__(self, data):
        self.id = data['id']
        self.price = data['price']
        self.make = data['make']
        self.model = data['model']
        self.year = data['year']
        self.description = data['description']
        self.user_id = data['user_id']
        self.user = data['user'] if 'user' in data else None
        self.created_at = data['created_at']
        self.updatd_at = data['updated_at']

    # class method to save the email object in the data base
    @classmethod
    def save(cls, data):
        query = "INSERT INTO cars (price, make, model, year, description, user_id) VALUES (%(price)s,%(make)s,%(model)s,%(year)s,%(description)s, %(user_id)s);"
        print(cls)
        return MySQLConnection(DATABASE).query_db(query, data)

    # @classmethod
    # def get_users_car(cls, data):
    #     query = "SELECT * FROM cars JOIN user ON cars.user_id = users.id;"

    #     results = connectToMySQL('car_deals').query_db(query,data)
        
    #     if not results:
    #         return[]
    #     print(results)
    #     cars = []
    #     for dict in results:
    #         cars.append(cls(dict))
    #     return cars


    # class method to get all the emails fromt the database
    @classmethod
    def get_all_cars(cls):
        query = "SELECT * FROM cars JOIN users ON cars.user_id = users.id;"
        results = connectToMySQL('car_deals').query_db(query)
        cars = []
        for row in results:
            car = Car(row)
            user_dict = {
                **row, 
                'id' : row['users.id'],
                'created_at' : row['users.created_at'],
                'updated_at' : row['users.updated_at'],
                'password' : None
            }
            car.user = users.User(user_dict)
            cars.append(car)
        return cars

    @classmethod
    def get_car(cls,data):
        query  = "SELECT * FROM cars JOIN users ON cars.user_id = users.id WHERE cars.id = %(id)s"
        result = MySQLConnection(DATABASE).query_db(query, data)
        #row = result[0]
        car = Car(result[0])
        print(car)
        user_dict = {
                **result[0], 
                'id' : result[0]['users.id'],
                'created_at' : result[0]['users.created_at'],
                'updated_at' : result[0]['users.updated_at'],
                'password' : None
            }
        car.user = users.User(user_dict)
        return car

    
    @classmethod
    def update(cls,data):
        query = "UPDATE cars SET price=%(price)s,make=%(make)s,model=%(model)s,year=%(year)s,description=%(description)s WHERE cars.id = %(id)s;"
        return connectToMySQL('car_deals').query_db(query,data)
    
    @classmethod
    def destroy(cls,data):
        query  = "DELETE FROM cars WHERE id = %(id)s;"
        return connectToMySQL('car_deals').query_db(query,data)


    @staticmethod
    def is_validcar(cars):
        is_valid = True
        if len(cars['price']) < 4:
            is_valid = False
            flash("Name must be at least 1000.", "price")
        if len(cars['make']) < 3:
            is_valid = False
            flash("Name must be at least 3 characters.", "make")
        if len(cars['model']) < 1:
            is_valid = False
            flash("invalid model!", "model")
        if len(cars['year']) < 4:
            is_valid = False
            flash("year must be greater than 4 characters", "year")
        if len(cars['description']) < 4:
            is_valid = False
            flash("Must be at least 3 characters", "description")
        return is_valid