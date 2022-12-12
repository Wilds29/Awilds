from flask import Flask

DATABASE = 'recipes_list'

app = Flask(__name__)
app.secret_key = "shhhhhh"