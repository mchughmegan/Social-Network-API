require('dotenv').config()
const { connect, connection } = require('mongoose');


connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@bootcamp.u0gziq4.mongodb.net/socialnetworkDB`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

module.exports = connection;