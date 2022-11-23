const { connect, connection } = require('mongoose');

connect('mongodb+srv://meganmchugh:Ut1996bronx$@bootcamp.u0gziq4.mongodb.net/socialnetworkDB',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

module.exports = connection;