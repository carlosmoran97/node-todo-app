const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodosApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server.');
    }

    console.log('Connected to MongoDB server.');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });
    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'})
    // .then((result) => {
    //     console.log(result);
    // });
    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false})
    // .then((result) => {
    //     console.log(result);
    // });
    // db.close();

    // Reto de la lección!!
    // No es parte del reto pero quiero hacer esto para practicar :3
    // db.collection('Users').find().toArray().then((docs) => {
    //     console.log('Users\n');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // });

    // :(

    // console.log('Borrando todos los usuarios con el nombre carlos!');
    // db.collection('Users').deleteMany({name: 'Carlos'}).then((result) => {
    //     console.log(result);
    // });

    console.log('Borrando por id');
    db.collection('Users').findOneAndDelete({_id: new ObjectID('5a6544610732731da893769f')})
    .then((result) => {
        console.log(result);
    });
});