const { MongoClient, ObjectId } = require('mongodb');
let singleton;

function connect() {
    if (singleton) return singleton;
    const client = new MongoClient(process.env.MONGO_HOST);
    client.connect();
    singleton = client.db(process.env.MONGO_DATABASE);
    return singleton;
}

module.exports = {
    connect
}