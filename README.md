NEWS-PROJECT
Laravel + ReactJS News Project With Docker Compose

This documentation will guide you in setting up and running a Laravel and ReactJS project using Docker Compose. Docker Compose is a tool used to manage and run multi-container applications easily.

Requirements
Before getting started, make sure your computer has the following software installed:

Docker: https://docs.docker.com/get-docker/
Docker Compose: https://docs.docker.com/compose/install/
Composer: https://getcomposer.org/download/
Node.JS: https://nodejs.org/en/download

Step 1: Clone This Repository
Clone this repository into a local folder on your computer

Step 2: Laravel Setup
1. Go To news-backend where laravel project 
2. Copy .env.example and paste + change the name to .env (the .env.example has been set as needed)
3. Open CMD and type the IPCONFIG command, take the IPv4 Address and paste it in DB_Host in the .env file

Step 3: Running the Project
1. Go to news-project
2. Open Docker Desktop APP
3. Open CMD in news-project and type :
      docker-compose up --build
4. Before Access the project, Open CMD in news-project and type : 
      php artisan migrate:fresh --seed,
   for migrate the database
6. After the build process is complete, you can access the Laravel application at http://localhost:8000, the ReactJS application at http://localhost:3000, the Phpmyadmin application at http://localhost:9001
7. To open Phpmyadmin MySQL server,
    Server Name : database,
    User : root,
    Pass : secret,

Congratulations! You have successfully set up and run the News-Project in Laravel + ReactJS project using Docker Compose.
