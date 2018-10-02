//const MongoClient =require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

// var user={name:'Ashlesh',age:21};
// var {name} =user;
// console.log(name);
var obj = new ObjectID();
console.log(obj);

 
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err)
    {
        return console.log('Unable to connect to MOngDB server');
        
    }
    console.log('Connected to MongoDB Server');

    // db.collection('Todos').insertOne({
    //     text:'Something to do',
    //     completed:false

    // },(err,result)=>{
    //     if(err)
    //     {
    //         return console.log('Unable to insert TODO', err);
            
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
        
    // });
    // db.collection('Users').insertOne({
    //     name:'Ashlesh',
    //     age:21,
    //     location:'pune'
    // },(err,result)=>{
    //     if(err)
    //     {
    //         return console.log('Unable to insert user ',err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
        
    // });


    db.close();
    
});