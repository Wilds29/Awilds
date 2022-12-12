from flask import Flask, session

DATABASE = 'car_deals'

app = Flask(__name__)

app.secret_key = "SHHHHHHHH."