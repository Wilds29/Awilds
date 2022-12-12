from flask import Flask, render_template
app = Flask(__name__)

@app.route('/hello')
def hello_world():
    return render_template('index.html', phrase="hello", times=5)


@app.route('/play/<int:x>/<color>')
def play(x,color):
    return render_template('index.html', times=x, color=color)




if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.

