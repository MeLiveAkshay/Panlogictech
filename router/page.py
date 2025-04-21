from flask import render_template
def init_route(app):
    @app.route('/')
    def hello():
        return render_template('index.html')

    @app.route('/home')
    def home():
        return render_template('index.html')