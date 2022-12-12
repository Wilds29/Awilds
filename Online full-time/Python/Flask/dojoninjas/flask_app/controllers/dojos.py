from flask import redirect, render_template, request
from flask_app import app
from flask_app.models.dojos import Dojo
from flask_app.models.ninjas import Ninja


@app.route('/')
def index():
    return redirect('/dojos')


@app.route('/dojos')
def dojos():
    dojo = Dojo.get_all_dojos()
    ninja = Ninja.get_all_ninja()
    return render_template('users.html', dojo=dojo, ninja=ninja)



@app.route('/dojos/new')
def new():
    return render_template("new_user.html")



@app.route('/dojos/create',methods=['POST'])
def create():
    print(request.form)
    Dojo.save(request.form)
    return redirect('/dojos')

@app.route('/dojo/<int:id>')
def dojo_show_ninja(id):
    data={
        'id' : id
    }
    dojo=Dojo.get_one(data)
    ninjas_dojo=Ninja.get_ninjas_dojo(data)
    return render_template('users.html', dojo=dojo, ninjas_dojo=ninjas_dojo)


@app.route('/dojos/edit/<int:id>')
def edit(id):
    data ={ 
        "id":id
    }
    return render_template("edit_user.html",dojos=Dojo.get_one(data))

@app.route('/dojos/show/<int:id>')
def show(id):
    data={
        'id' : id
    }
    ninjas_dojo=Ninja.get_ninjas_dojo(data)
    return render_template("show_user.html",dojos=Dojo.get_one(data), ninjas_dojo=ninjas_dojo)


@app.route('/dojos/update',methods=['POST'])
def update():
    Dojo.update(request.form)
    return redirect('/dojos')

@app.route('/dojos/destroy/<int:id>')
def destroy(id):
    data ={
        'id': id
    }
    Dojo.destroy(data)
    return redirect('/dojos')