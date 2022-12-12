import re  # the regex module

from flask import flash, session
from flask_app import DATABASE, app
from flask_app.config.mysqlconnection import MySQLConnection, connectToMySQL
from flask_app.models import users


class Painting:
    # using a class variable to hold my database name

    def __init__(self, data):
        self.id = data['id']
        self.title = data['title']
        self.description = data['description']
        self.price = data['price']
        self.user_id = data['user_id']
        self.user = data['user'] if 'user' in data else None
        self.created_at = data['created_at']
        self.updatd_at = data['updated_at']

    # class method to save the email object in the data base
    @classmethod
    def save(cls, data):
        query = "INSERT INTO paintings (title, description, price, user_id) VALUES (%(title)s,%(description)s,%(price)s, %(user_id)s);"
        print(cls)
        return MySQLConnection(DATABASE).query_db(query, data)


    # class method to get all the emails fromt the database
    @classmethod
    def get_all_paint(cls):
        query = "SELECT * FROM paintings JOIN users ON paintings.user_id = users.id;"
        results = connectToMySQL('artist_paintings').query_db(query)
        paintings = []
        for row in results:
            painting = Painting(row)
            user_dict = {
                **row, 
                'id' : row['users.id'],
                'created_at' : row['users.created_at'],
                'updated_at' : row['users.updated_at'],
                'password' : None
            }
            painting.user = users.User(user_dict)
            paintings.append(painting)
        return paintings

    @classmethod
    def get_paint(cls,data):
        query  = "SELECT * FROM paintings JOIN users ON paintings.user_id = users.id WHERE paintings.id = %(id)s"
        result = MySQLConnection(DATABASE).query_db(query, data)
        #row = result[0]
        painting = Painting(result[0])
        print(Painting)
        user_dict = {
                **result[0], 
                'id' : result[0]['users.id'],
                'created_at' : result[0]['users.created_at'],
                'updated_at' : result[0]['users.updated_at'],
                'password' : None
            }
        painting.user = users.User(user_dict)
        return painting

    
    @classmethod
    def update(cls,data):
        query = "UPDATE paintings SET title=%(title)s,description=%(description)s,price=%(price)s WHERE paintings.id = %(id)s;"
        return connectToMySQL('artist_paintings').query_db(query,data)
    
    @classmethod
    def destroy(cls,data):
        query  = "DELETE FROM paintings WHERE id = %(id)s;"
        return connectToMySQL('artist_paintings').query_db(query,data)


    @staticmethod
    def is_validpaint(painting):
        is_valid = True
        if len(painting['title']) < 3:
            is_valid = False
            flash("Name must be at least 3 characters.", "title")
        if len(painting['description']) < 4:
            is_valid = False
            flash("Must be at least 3 characters", "description")
        if len(painting['price']) < 4:
            is_valid = False
            flash("Price must be at least $1000.", "price")
        return is_valid