// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodosApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server.');
    }
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert todo');
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    // console.log('Connected to MongoDB server.');

    // db.collection('Users').insertOne({
    //     name: 'Carlos Morán',
    //     age: 20,
    //     location: 'Santa Tecla, El Salvador'
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert user(s)');
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.close();
});