from flask import render_template, request, redirect

from flask_app import app


from flask_app.models.ninjas import Ninja




# @app.route('/dojos')
# def dojos_ninjas():
#     ninja = Ninja.get_all_ninja()
#     print(ninja)
#     return render_template('users.html', ninja=ninja)



@app.route('/ninja/create',methods=['POST'])
def create_ninja():
    print(request.form)
    Ninja.save(request.form)
    return redirect('/dojos')

@app.route('/ninja/new_ninja')
def new_ninja():
    return render_template("new_ninja.html")

@app.route('/dojos/edit/<int:id>')
def edit_ninja(id):
    data ={ 
        "id":id
    }
    return render_template("edit_user.html",ninja=Ninja.get_one(data))




@app.route('/dojos/update',methods=['POST'])
def update_ninja():
    Ninja.update(request.form)
    return redirect('/dojos')

@app.route('/ninja/destroy/<int:id>')
def destroy_ninja(id):
    data ={
        'id': id
    }
    Ninja.destroy(data)
    return redirect('/dojos')