import uuid
from flask import render_template, redirect, request, session
from flask_app import app
from flask_app.models.user import User

from flask_bcrypt import Bcrypt        
bcrypt = Bcrypt(app)


@app.route('/')
def index():
    return render_template("login.html")


@app.route('/register_validate',methods=['POST'])
def process():
    print(request.form)
    if not User.is_valid(request.form):
        return redirect('/')
    pwpw_hash = bcrypt.generate_password_hash(request.form['password'])
    data = {
        **request.form,
        'password':pwpw_hash
    }
    user_id = User.save(data)
    session['uuid'] = user_id
    return redirect('/')

@app.route('/login_validate', methods=['POST'])
def email_log():
    if not User.valid_email(request.form):
        return redirect('/')
    return redirect('/home')

@app.route('/home')
def results():
    if'uuid' not in session:
        return redirect('/')
    user = User.get_one({'id': session['uuid']})
    return render_template("home.html",user=user)


@app.route('/logout')
def logout():
    if 'uuid' in session:
        del session['uuid']
    return redirect('/')