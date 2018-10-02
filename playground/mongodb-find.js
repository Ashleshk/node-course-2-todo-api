//const MongoClient =require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

// var user={name:'Ashlesh',age:21};
// var {name} =user;
// console.log(name);
// var obj = new ObjectID();
// console.log(obj);

 
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err)
    {
        return console.log('Unable to connect to MOngDB server');
        
    }
    console.log('Connected to MongoDB Server');

    //  db.collection('Todos').find({
    //      _id :new ObjectID('5bb2f3b9dd1de8a7bd3658e0')
    //     }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
        
        
    //  },(err)=>{
    //      console.log('Unable to fetch todos',err);
    //  });

    // db.collection('Todos').find().count().then((count)=>{
    //    console.log(`Todo count :${count}`);
    //    console.log(JSON.stringify(count,undefined,2));
       
       
    // },(err)=>{
    //     console.log('Unable to fetch todos',err);
    // });

    db.collection('Users').find({name:'Ashlesh'}).count().then((count)=>{
        console.log(`Todo count :${count}`);
        console.log(JSON.stringify(count,undefined,2));
        
        
     },(err)=>{
         console.log('Unable to fetch todos',err);
     });

   // db.close();
    
});