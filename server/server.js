 //library imports
var express =require('express');
var bodyParser= require('body-parser');


//local imports
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/Todo');
var {User} =require('./models/user');



//basic app setup
var app = express();
//middleware
app.use(bodyParser.json());

//configurung the routes
//POST Route::
//CRUD _CREATE, read ,update and delete 
app.post('/todos',(req,res)=>{
    //console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc)=>{
        res.send(doc);
    },
    (e)=>{
        res.status(400).send(e);

    });
});

app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
          res.send({todos});
    },(e)=>{
        res.status(400).send(e);
    });
});


//app listerner
app.listen(3000,()=>{
    console.log('Started on port 3000....');
    
});

module.exports = {app};
//created a new todo
// var newTodo = new Todo({
//     text:'Cook dinner'
// });

// var newTodo2 = new Todo({
//     text:'play games',
//     completed:true,
//     completedAt:5
// });
//saving to the database 
//for saving the data 

// newTodo.save().then((doc)=>{
//     console.log('Saved todo',doc);
    
// },(e)=>{
//     console.log('unable to save todo..');
    
// });

// var user =new User({
//     email:'ashleshuk@gmail.com'
// });
// user.save().then((doc)=>{
//     console.log('User saved ',doc);
    
// },(e)=>{
//     console.log('Uanble to create user',e);
    
// });

// newTodo2.save().then((doc)=>{
//     console.log('Saved todo',doc);
    
// },(e)=>{
//     console.log('unable to save todo..');
    
// });
