Hello All ! Welcome to my To-DO list API
Trello - https://trello.com/b/GY3KsVUn/api-project-2


<h1>GETTING STARTED</h1>

In order to start you can go to my github repository where you can basically clone the entire code onto your machine. 

Go to this link https://github.com/joecruz17/Project2-API-Todo

After going to this link, you will the name of the Repository "Project2-API-Todo" and a green Code next to it. 

Clik on that green code and click on SSH, and copy the link that pops up.

Next Open your terminal, and change the current directory to where you want the clone with the cd command. ex: cd homework

Type in "git clone" and paste the URL you copied.

Next use the ls command to see the contents of the folder you are in, and use the cd command to enter the folder that you just cloned.

Now install the following packages using sudo npm i

Once that is done, create an env file in your terminal using the touch command ex: touch .env

Now open vs code by using the code . command

Go to you .env file and make sure you have your MONGO_URI from your mongodb account
It should look like this
MONGO_URI=mongodb+srv://joecruz17:passowrd@cluster0.5sgieqg.mongodb.net/project2?retryWrites=true&w=majority

Save everything and type npm run dev, in your vs code terminal

<h1>POSTMAN</h1>

Now once you are set up you can login into Postman


Go to the Body Tag, click on the drop down hit raw, hit on the drop down that appears and click JSON. 
Enter your information in this format

{
    "name": "sample",
    "email": "sample",
    "password": "sample"
}


Create a User POST http://localhost:6000/users/

login User 'POST' http://localhost:6000/users/login

Update a User PUT http://localhost:6000/users/:id (which is the id of the user you are updating)

Delete a User DELETE http://localhost:6000/users/:id (which is the id of the user you are deleting)


<h1>TODOS</h1>


Get list of incomplete Todos GET http://localhost:6000/todos/incomplete

Get list of complete Todos GET http://localhost:6000/todos/completed

When making a todo use this structure 
{
    "title": "example",
    "completed": false
}

Create a Todo'POST' http://localhost:6000/todos

Delete a Todo DELETE http://localhost:6000/todos/:id (which is the id of the user you are deleting)

Update a Todo PUT http://localhost:6000/todos/:id (which is the id of the user you are updating)

Show a User GET http://localhost:6000/todos/:id (which is the id of the user you are getting)

