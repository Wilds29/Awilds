from flask import render_template, request, redirect, session

from flask_app import app

from flask_app.models.survey import Dojo


@app.route('/')
def index():
    return render_template("survey.html")


@app.route('/create/survey',methods=['POST'])
def create_survey():
    if Dojo.is_valid(request.form):
        Dojo.save(request.form)
        return redirect('/result')
    return redirect('/')

@app.route('/result')
def results():
    return render_template('result.html', dojos = Dojo.get_last_dojo())