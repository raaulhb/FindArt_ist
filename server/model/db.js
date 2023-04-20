const mongoose = require('./index');
const { Schema } = mongoose;

const artistSchema = new Schema({
  name: String,
  style: String,
  ratings: Number,
  about: String,
  portfolio: String,
  media: [String],
});

const ArtistList = mongoose.model('ArtistList', artistSchema);

module.exports = ArtistList;
