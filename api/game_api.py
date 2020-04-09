import random
import string
from flask import Flask, request

app = Flask(__name__)

rooms = {
    'TEST': {
        'players': [
            {'name': 'JohnnyCash'},
            {'name': 'Mary Ann'},
            {'name': 'Booty'},
            {'name': 'YEET'}
        ]
    }
}

@app.route('/room', methods=['GET', 'POST'])
def room():
    if request.method == 'POST': 
        return create_room()
    elif request.method == 'GET':
        room_code = request.form['room_code']
        return check_existing_room(room_code)

# creates room and returns room_code
def create_room():
    code_len = 4
    letters = string.ascii_lowercase
    room_code = ''.join(random.choice(letters) for i in range(code_len))
    return {'room_code': room_code}

# checks if room exists -> true/false
def check_existing_room(room_code):
    if room_code in rooms:
        return True
    else: 
        return False
