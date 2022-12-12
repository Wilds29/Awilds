from flask_app.config.mysqlconnections import connectToMySQL

from flask import flash


class Dojo:
    def __init__(self,data):
        self.id = data['id']
        self.name = data['name']
        self.location = data['location']
        self.language = data['language']
        self.comment = data['comment']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def save(cls,data):
        query = "INSERT into dojos (name,location,language,comment) VALUES (%(name)s,%(location)s,%(language)s,%(comment)s);"
        return connectToMySQL('dojo_survey').query_db(query,data)

    @classmethod
    def get_last_dojo(cls):
        query = "SELECT * FROM dojos ORDER BY dojos.id DESC LIMIT 1;"
        results = connectToMySQL('dojo_survey').query_db(query)
        if not results: return[]
        return Dojo(results[0])

    @staticmethod
    def is_valid(dojos):
        is_valid = True
        if len(dojos['name']) < 3:
            is_valid = False
            flash("Name must be at least 3 characters.")
        if len(dojos['location']) < 1:
            is_valid = False
            flash("Must choose a dojo location.")
        if len(dojos['language']) < 1:
            is_valid = False
            flash("Must choose a favorite language.")
        if len(dojos['comment']) < 3:
            is_valid = False
            flash("Comments must be at least 3 characters.")
        return is_valid