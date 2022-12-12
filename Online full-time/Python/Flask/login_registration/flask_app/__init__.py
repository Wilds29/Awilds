from flask import Flask, session

DATABASE = 'login_register'

app = Flask(__name__)

app.secret_key = "SHHHHHHHH."