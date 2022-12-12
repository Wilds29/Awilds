import re  # the regex module

from flask import flash, session
from flask_app import DATABASE, app
from flask_app.config.mysqlconnections import MySQLConnection, connectToMySQL
from flask_app.models import cars
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt(app)
# create a regular expression object that we'll use later
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')


class User:
    # using a class variable to hold my database name

    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updatd_at = data['updated_at']

    # class method to save the email object in the data base
    @classmethod
    def save(cls, data):
        query = "INSERT INTO users (first_name, last_name, email, password) VALUES (%(first_name)s,%(last_name)s,%(email)s,%(password)s);"
        print(cls)
        return MySQLConnection(DATABASE).query_db(query, data)


    # class method to get all the emails fromt the database
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"
        results = connectToMySQL('login_register').query_db(query)
        emails = []
        for row in results:
            emails.append(cls(row))
        return emails

    @classmethod
    def get_one(cls,data):
        query  = "SELECT * FROM users WHERE id = %(id)s"
        result = MySQLConnection(DATABASE).query_db(query, data)
        return cls(result[0])

    @classmethod
    def get_by_email(cls, data):
        query  = "SELECT * FROM users WHERE users.email = %(email)s"
        result = MySQLConnection(DATABASE).query_db(query, data)
        if not result: 
            return False
        user = cls(result[0])
        return user

    # class method to delete an email from the database based on the PK.

    @staticmethod
    def is_valid(users):
        is_valid = True
        if len(users['first_name']) < 3:
            is_valid = False
            flash("Name must be at least 3 characters.", "frname")
        if len(users['last_name']) < 3:
            is_valid = False
            flash("Name must be at least 3 characters.", "last_name")
        if len(users['email']) < 1:
            is_valid = False
            flash("invalid Email!", "email")
        if len(users['password']) < 1:
            is_valid = False
            flash("Invalid Password", "password")
        if users['confirm_password'] != users['password']:
            is_valid = False
            flash("Invalid Password", "confirm_password")
        return is_valid

    @staticmethod
    def valid_email(data):
        is_valid = True
        if len(data) <= 1:
            flash("Email already taken.", "get_email")
            is_valid=False
        if not EMAIL_REGEX.match(data['email']):
            flash("Invalid Email!!!", "get_email")
            is_valid=False
        if is_valid:
            user_in_db = User.get_by_email({'email': data['email']})
            if not user_in_db:
                flash('NOT VALID!',"get_email")
                is_valid = False
            if not bcrypt.check_password_hash(user_in_db.password, data['password']):
                flash('NOT VALID!',"get_email")
                is_valid = False
            session['uuid'] =user_in_db.id
        return is_valid

