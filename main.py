from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
@app.route('/home')
def index():
    return render_template('index.html')


@app.route('/athena')
def athena():
    return render_template('athena.html')


if __name__ == "__main__":
    app.run(debug=True)
