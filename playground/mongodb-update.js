const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodosApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server.');
    }

    console.log('Connected to MongoDB server.');

    // db.collection('Todos').findOneAndUpdate(
    //     {_id: new ObjectID("5a6657bea3c3a90bea7695eb")}
    // ,{$set: {
    //     completed: true
    // }},{
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate(
        {
            _id: new ObjectID('5a65446d5178e91dbe8c9841')
        },
        {
            $set: {
                name: 'Carlos'
            },
            $inc: {
                age: 1
            }
        },
        {
            returnOriginal: false
        }
    ).then((result) => {
        console.log(result);
    });

    db.close();
});