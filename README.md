# dev-tasklist-Ardrit Krasniqi
In this repo you can find a project that is split between Backend, and Frontend folder; 

Our backend is using Expressjs, and a MySQL database;

Our frontend is using Nextjs. 

This repo uses a docker-compose.yml file to launch the project in your local environment that means you must have Docker installed
and running before attempting the start the local environment for work; [Download Docker Here](https://www.docker.com/products/docker-desktop/)

## Instructions to start the local environment

* Establish a GitHub account
* Make sure your Git name is: Name Surname
* Make sure your Git email is the same one that you have applied with for the internship
* Clone the repo dev-tasklist
* Ensure that you have Docker running
* Open a bash terminal and go to the cloned repo dev-tasklist, now, you can start your local environment using this command:

```docker-compose up --build```

This command will launch the services for: mysql, backend, frontend, and phpmyadmin. 

Your backend that powers your API calls is located at port 5000, and can be used inside of your frontend app with http://host.docker.internal:5000 base url.

Once you have confirmed your services are up and running, you can visit localhost:3000 to view your frontend.


## Warning

Because we are using Docker to start our services, any new/update on the frontend app will require you to restart the services; 

You can restart it by running this command on root of dev-tasklist repo: 

```docker-compose down -v```

And then restarting them with the command: 

```docker-compose up --build```
