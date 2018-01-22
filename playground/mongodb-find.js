// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodosApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server.');
    }
    // db.collection('Users').insertOne({
    //     name: 'Rodrigo',
    //     age: 21,
    //     location: 'San Miguel, El Salvador'
    // }, (err, result) => {
    //     console.log(result.ops);
    // });
    db.collection('Users').find({ name: 'Carlos' }).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fecth todos:',err);
    });

    // count
    // db.collection('Todos').count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to count todos: ',err);
    // });

    //db.close();
});