const mongoose = require('mongoose');
const db_url = 'mongodb://127.0.0.1:27017/artistList';

try {
  mongoose.connect(db_url);
  console.log('-----------> mongoose database is connected !');
} catch (error) {
  console.log(error);
}

module.exports = mongoose;
