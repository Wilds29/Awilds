from flask import redirect, render_template, request, session
from flask_app import app
from flask_app.models.cars import Car
from flask_app.models.users import User
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
    return redirect('/results')

@app.route('/results')
def results():
    if'uuid' not in session:
        return redirect('/')
    user = User.get_one({'id': session['uuid']})
    cars = Car.get_all_cars()
    print(cars)
    return render_template("home.html",user=user, cars=cars)

#@app.route('/logout')
#def logout():
    #if 'uuid' in session:
        #del session['uuid']
    #return redirect('/')

@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')
