from flask import Flask
from router.page import init_route as init_main_routes 

app = Flask(__name__)

init_main_routes(app)

if __name__ == '__main__':
    app.run(debug=True)