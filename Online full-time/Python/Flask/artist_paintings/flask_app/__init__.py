from flask import Flask, session

DATABASE = 'artist_paintings'

app = Flask(__name__)

app.secret_key = "SHHHHHHHH."