from flask import redirect, render_template, request, session
from flask_app import app
from flask_app.models.cars import Car
from flask_app.models.users import User

# @app.route('/dojos')
# def dojos_ninjas():
#     ninja = Ninja.get_all_ninja()
#     print(ninja)
#     return render_template('users.html', ninja=ninja)



@app.route('/car/create',methods=['POST'])
def create_car():
    #if 'user_id' not in session:
        #return redirect('/logout')
    if not Car.is_validcar(request.form):
        return redirect('/add_car')
    data={
        'price': request.form['price'],
        'make' : request.form['make'],
        'model' : request.form['model'],
        'year' : request.form['year'],
        'description' : request.form['description'],
        'user_id' : session['uuid']
    }
    Car.save(data)
    return redirect('/results')

@app.route('/add_car')
def new_car():
    return render_template("add_car.html")

@app.route('/car/show/<int:id>')
def showcar(id):
    data={
        'id': id
    }
    cars = Car.get_car(data)
    return render_template("show_car.html",cars=cars)

@app.route('/car/edit/<int:id>')
def editcar(id):
    data={
        'id' : id
    }
    car=Car.get_car(data)
    return render_template("edit_car.html", car=car)



# @app.route('/car/edit',methods=['POST'])
# def edit_car():
#     Car.update(request.form)
#     return redirect('/results')

@app.route('/car/edit/<int:id>',methods=['POST'])
def edit_car(id):
    #if 'user_id' not in session:
        #return redirect('/logout')
    if not Car.is_validcar(request.form):
        return redirect('/add_car')
    data={
        **request.form,
        'id' : id
    }
    print(data)
    Car.update(data)
    return redirect('/results')

@app.route('/car/destroy/<int:id>')
def destroy(id):
    data ={
        'id': id
    }
    Car.destroy(data)
    return redirect('/results')