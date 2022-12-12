# import the function that will return an instance of a connection
from flask_app.config.mysqlconnection import connectToMySQL
# model the class after the friend table from our database


class Ninja:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.age = data['age']
        self.dojos_id = data['dojos_id']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def get_all_ninja(cls):
        query = "SELECT * FROM ninjas;"

    # make sure to call the connectToMySQL function with the schema you are targeting.
        results = connectToMySQL('dojos').query_db(query)

        if not results:
            return[]

        # Create an empty list to append our instances of ninja
        all_ninja = []
        # Iterate over the db results and create instances of ninja with cls.
        for dict in results:
            all_ninja.append( cls(dict) )
        return all_ninja

    @classmethod
    def get_ninjas_dojo(cls, data):
        query = "SELECT * FROM ninjas JOIN dojo ON dojo.id = ninjas.dojos_id WHERE dojo.id = %(id)s;"


    # make sure to call the connectToMySQL function with the schema you are targeting.
        results = connectToMySQL('dojos').query_db(query, data)

        if not results:
            return[]

        # Create an empty list to append our instances of ninja
        ninjas_dojo = []
        # Iterate over the db results and create instances of ninja with cls.
        for dict in results:
            ninjas_dojo.append( cls(dict) )
        return ninjas_dojo


    @classmethod
    def save(cls, data):
        query = "INSERT INTO ninjas (first_name,last_name,age,dojos_id) VALUES (%(first_name)s,%(last_name)s,%(age)s,%(dojos_id)s);"

        # comes back as the new row id
        result = connectToMySQL('dojos').query_db(query,data)
        return result
    @classmethod
    def get_one(cls,data):
        query  = "SELECT * FROM ninjas WHERE id = %(id)s";
        result = connectToMySQL('dojos').query_db(query,data)
        return cls(result[0])

    @classmethod
    def update(cls,data):
        query = "UPDATE ninjas SET first_name=%(first_name)s, last_name=%(last_name)s,age=%(age)s,dojos_id=%(dojos_id)s, WHERE id = %(id)s;"
        return connectToMySQL('dojos').query_db(query,data)

    @classmethod
    def destroy(cls,data):
        query  = "DELETE FROM ninjas WHERE id = %(id)s;"
        return connectToMySQL('dojos').query_db(query,data)