import random
import string
from flask import Flask

app = Flask(__name__)

@app.route('/room')
def get_room_code():
    code_len = 4
    letters = string.ascii_lowercase
    code = ''.join(random.choice(letters) for i in range(code_len))
    return {'room_code': code}