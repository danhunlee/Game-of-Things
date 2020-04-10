import random
import string
from flask import Flask, request

app = Flask(__name__)

rooms = {
    'TEST': {
        'players': {
            'JohnnyCash': {
                'points': 0,
                'is_host': True
            },
            'Mary Ann': {
                'points': 0,
                'is_host': False
            },
            'Booty': {
                'points': 0,
                'is_host': False
            },
            'YEET': {
                'points': 0,
                'is_host': False
            },
        },
        'room': {
            'max_players': 25
        },
        'game': {
            'stage': 1, #TODO: implement stage system
            'num_questions': 25,
            'questions_theme': 'default', 
            'current_question_num': 0
        }
    }
}

questions = {
    
}


#######
# Room
#######
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
        return 'OK'
    else: 
        return 'False - room doesnt exist'

#######
# Players
#######
@app.route('/players', methods=['GET', 'POST', 'PUT', 'DELETE'])
def players():
    if request.method == 'PUT':
        return create_player(request.form['room_code'], request.form['player_name'])
    elif request.method == 'GET':
        return get_all_players(request.form['room_code'])
    elif request.method == 'DELETE':
        return remove_player(request.form['room_code'], request.form['player_name'])

def get_all_players(room_code):
    if room_code in rooms: 
        return rooms[room_code]['players']
    else: 
        return 'ERROR - room doesnt exist'

# TODO: need to handle duplicate name
# TODO: handle is_host -> when creating player who has created a room
# TODO: handle max players
def create_player(room_code, player_name, is_host=False):
    try:
        rooms[room_code]['players'][player_name] = {'points': 0, 'is_host': is_host}
    except:
        return 'ERROR - creating player didnt work'
    return 'OK'

# TODO: Handle removing host -> maybe transfer host to next player?
def remove_player(room_code, player_name):
    if rooms[room_code]: 
        curr_player = None
        try: 
            curr_player = rooms[room_code]['players'][player_name]
            if curr_player['is_host']:
                change_host(room_code, player_name)
            del rooms[room_code]['players'][player_name]
            return 'OK'
        except: 
            return 'ERROR - couldnt remove player'
    else: 
        return 'ERROR - room doesnt exist'
        
# TODO: change current host to new host
def change_host(room_code, host_name, new_host_name='random'):
    pass


#######
# Game
#######
@app.route('/game', methods=['GET', 'POST', 'PUT', 'DELETE'])
def game():
    pass


