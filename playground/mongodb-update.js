//const MongoClient =require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

  

 
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err)
    {
        return console.log('Unable to connect to MOngDB server');
        
    }
    console.log('Connected to MongoDB Server');
  

    //finOneAndUpdate
    // db.collection('Todos').findOneAndUpdate(
    //     {_id:new ObjectID('5bb3024edd1de8a7bd365bab')
    // },{
    //     $set :{
    //         completed : true
    //     }
    // },{
    //     returnOriginal:false
    // }).then((result)=>{
    //     console.log(result);
        
    // });

    db.collection('Users').findOneAndUpdate(
        { _id : new ObjectID('5bb2fad7dd1de8a7bd365a7f')
    },{
        $set :{
            name : 'Ashleshk'

        },
        $inc:{age:1}
    },{
        returnOriginal:false
    }).then((result)=>{
        console.log(result);
        
    });







    //db.close();
    
});