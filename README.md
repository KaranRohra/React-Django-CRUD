# Project Setup
- First clone the repo at your desire location
- Now run `pip install virtualenv`
- Navigate to project folder using Terminal / CMD
- run `virtualenv env` this will create virtual environment for our project
- Now activate `env`
    - Windows: `env/Scripts/activate` or `env\Scripts\activate`
    - Linux / MacOS: `source env/bin/activate`
- To setup `Backend Server` follow below steps
    - navigate to backend folder from terminal using `cd backend`
    - run `pip install -r requirements.txt`
    - to create database execute this commands
        - `python manage.py makemigrations`
        - `python manage.py migrate`
    - start backend server using `python manage.py runserver`
- To setup `Frontend Server` follow below steps
    - navigate to `frontend folder` using `cd ../frontend`
    - run `npm install`, it takes time to install all packages
    - now our all frontend packages are installed, if not wait for sometime, npm takes time to install packages
    - start frontend server using `npm run start`
- Now both the server are running, verify with below links
    - Backend Server: http://localhost:8000
    - Frontend Server: http://localhost:3000
