
from flask import redirect, render_template, request, session
from flask_app import app
from flask_app.models.paintings import Painting
from flask_app.models.users import User

# @app.route('/dojos')
# def dojos_ninjas():
#     ninja = Ninja.get_all_ninja()
#     print(ninja)
#     return render_template('users.html', ninja=ninja)



@app.route('/paint/create',methods=['POST'])
def create_paint():
    #if 'user_id' not in session:
        #return redirect('/logout')
    if not Painting.is_validpaint(request.form):
        return redirect('/add_painting')
    data={
        'title' : request.form['title'],
        'description' : request.form['description'],
        'price': request.form['price'],
        'user_id' : session['uuid']
    }
    Painting.save(data)
    print(Painting)
    return redirect('/results')

@app.route('/add_painting')
def new_paint():
    return render_template("add_painting.html")

@app.route('/painting/show/<int:id>')
def showpaint(id):
    data={
        'id': id
    }
    painting = Painting.get_paint(data)
    return render_template("show_paint.html",painting=painting)

@app.route('/painting/edit/<int:id>')
def edit_paint(id):
    data={
        'id' : id
    }
    paint=Painting.get_paint(data)
    return render_template("edit_painting.html", paint=paint)


@app.route('/painting/edit/<int:id>',methods=['POST'])
def edit_painting(id):
    #if 'user_id' not in session:
        #return redirect('/logout')
    if not Painting.is_validpaint(request.form):
        return redirect('/add_painting')
    data={
        **request.form,
        'id' : id
    }
    print(data)
    Painting.update(data)
    return redirect('/results')

@app.route('/painting/destroy/<int:id>')
def destroy(id):
    data ={
        'id': id
    }
    Painting.destroy(data)
    return redirect('/results')