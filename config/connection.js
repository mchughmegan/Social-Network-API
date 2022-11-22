const { connect, connection } = require('mongoose');

connect(process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

module.exports = connection;