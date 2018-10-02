//const MongoClient =require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

  

 
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err)
    {
        return console.log('Unable to connect to MOngDB server');
        
    }
    console.log('Connected to MongoDB Server');
 
    //deleteMany
    // db.collection('Todos').deleteMany({text:'eat lunch'}).then((result)=>{
    //     console.log(result);
        
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text:'eat lunch'}).then((result)=>{
    //         console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
    //     console.log(result);
    // });


    db.collection('Users').deleteMany({name:'Ashlesh'});

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5bb2faffdd1de8a7bd365a8f')}).then((results)=>{
        console.log(JSON.stringify(results,undefined,2));
        
    });
    //db.close();
    
});