# import the function that will return an instance of a connection
from flask_app.config.mysqlconnection import connectToMySQL
# model the class after the friend table from our database


class Dojo:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def get_all_dojos(cls):
        query = "SELECT * FROM dojo;"

    # make sure to call the connectToMySQL function with the schema you are targeting.
        results = connectToMySQL('dojos').query_db(query)

        if not results:
            return[]

        # Create an empty list to append our instances of ninja
        all_dojos = []
        # Iterate over the db results and create instances of ninja with cls.
        for dict in results:
            all_dojos.append( cls(dict) )
        return all_dojos


    @classmethod
    def save(cls, data):
        query = "INSERT INTO dojo (name) VALUES (%(name)s);"

        # comes back as the new row id
        result = connectToMySQL('dojos').query_db(query,data)
        return result
    @classmethod
    def get_one(cls,data):
        query  = "SELECT * FROM dojo WHERE id = %(id)s";
        result = connectToMySQL('dojos').query_db(query,data)
        return cls(result[0])

    @classmethod
    def update(cls,data):
        query = "UPDATE dojo SET name=%(name)s,updated_at=NOW() WHERE id = %(id)s;"
        return connectToMySQL('dojos').query_db(query,data)

    @classmethod
    def destroy(cls,data):
        query  = "DELETE FROM dojo WHERE id = %(id)s;"
        return connectToMySQL('dojos').query_db(query,data)
