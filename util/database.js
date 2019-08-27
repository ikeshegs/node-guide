const mongodb = require('mongodb');
const dotenv = require('dotenv');
const MongoClient = mongodb.MongoClient;

dotenv.config();

const mongoConnect = callback => {
  MongoClient
    .connect(process.env.DB_URL)
    .then(client => {
      console.log('Connected!');
      callback(client);
    })
    .catch(err => console.log(err));
}

module.exports = mongoConnect;