from flask import render_template, redirect, request, session
from flask_app import app
from flask_app.models.recipes import Recipe



@app.route('/')
def new_recipe():
    return render_template("create_recipe.html")


@app.route('/recipe/create',methods=['POST'])
def create():
    print(request.form)
    Recipe.save(request.form)
    return redirect('/home')
