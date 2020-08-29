
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Mauricio:7468@bootcamp.ijmxh.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useNewUrlParser: true, useUnifiedTopology: true });
client.connect(async err => {
    const collection = client.db("grades").collection("student");
    const document = await collection.find().toArray();
    //console.log(document);

    const databaselist = await client.db().admin().listDatabases();

    console.log('Databases:');
    databaselist.databases.forEach( db => {
     console.log(` - ${db.name}`);
    });
    // perform actions on the collection object
    client.close();
});
