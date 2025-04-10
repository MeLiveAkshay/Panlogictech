def init_route(app):
    @app.route('/')
    def hello():
        return 'Hello World!'
