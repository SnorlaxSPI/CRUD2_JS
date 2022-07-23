import pkg from 'mongodb';
const { mongoClient } = pkg;

const MONGO_DB_URL = 'mongodb://localhost:27017/';
const DB_NAME = 'hello_mongo';

//const connection = () => MongoClient
//  .connect(MONGO_DB_URL, {
//    useNewUrlParser: true,
//    useUnifiedTopology: true,
//  })
//  .then((conn) => conn.db(DB_NAME))
//  .catch((err) => {
//    console.log(err);
//    process.exit(1);
//  });

  //module.exports = connection;


mongoClient.connect(MONGO_DB_URL, { useUnifiedTopology: true },
                            (error, connection) => {
                            if(error) return console.log(error);
                            global.connect = connection.db;
                            console.log('Connected!')
});

module.exports = {};