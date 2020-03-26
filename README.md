# Game-of-Things

## Resources 
- Created project based on this tutorial: https://blog.miguelgrinberg.com/post/how-to-create-a-react--flask-project 
- Team Google Drive: https://drive.google.com/drive/folders/1VrLuFihsqI3cWWvmMA8xs_sE6qZYkhZy?usp=sharing 

## Running the project 
This project has a Flask Python API (backend) and React App (frontend). 
You can technically run either separately (i.e. to just test the api, or to work on the frontend without data), but most of the time you will want to run both. 

### 1. Startup the API 
> cd client/game-of-things-app 

> yarn start_api 

### 2. Run the React App - do this in a seperate terminal window 
> cd client/game-of-things-app

> yarn start 


## Installing the project for the first time 
> git clone <repo>

> cd api 

> python3 -m venv venv

> source venv/bin/activate

> pip install flask python-dotenv

> cd .. 

> cd client/game-of-things-app 

> yarn install 


## Troubleshooting 
If you don't have yarn installed go to a different directory and do a brew install yarn 
> brew install yarn 


## Client File Structure
/assets - pictures and graphic assets
/components - components used across the app 
/css - styling files
/pages - main pages used across site
/shared - functions and classes to use. i.e. API calls, commonly used functions