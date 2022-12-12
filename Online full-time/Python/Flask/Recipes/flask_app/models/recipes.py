from flask import flash, session
from flask_app.config.mysqlconnections import connectToMySQL , MySQLConnection
import re  # the regex module
from flask_app import DATABASE, app


class Recipe:
    # using a class variable to hold my database name

    def __init__(self, data):
        self.id = data['id']
        self.description = data['description']
        self.instruction = data['instruction']
        self.under_30 = data['under_30']
        self.created_at = data['created_at']
        self.updatd_at = data['updated_at']

    # class method to save the email object in the data base
    @classmethod
    def save(cls, data):
        query = "INSERT INTO recipes (description, instruction, under_30) VALUES (%(decription)s,%(instruction)s,%(under_30)s);"
        print(cls)
        return MySQLConnection(DATABASE).query_db(query, data)

    # class method to get all the emails fromt the database
    @classmethod
    def get_all_recipes(cls):
        query = "SELECT * FROM recipes;"
        results = connectToMySQL('recipes').query_db(query)
        recipes = []
        for row in results:
            recipes.append(cls(row))
        return recipes
