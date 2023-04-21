const ArtistList = require('../model/db');

async function postArtist(req, res) {
  console.log('A new artist has been created');
  const newRecord = {
    name: req.body.name,
    style: req.body.style,
    ratings: req.body.ratings,
    about: req.body.about,
    profilePic: req.body.profilePic,
  };
  try {
    const artist = await ArtistList.create(newRecord);
    res.status(201).send(artist);
  } catch (error) {
    res
      .status(400)
      .send('----------> this is an error when creating an artist');
  }
}

async function getArtist(req, res) {
  console.log('----------> getting artist was completed');
  try {
    const all = await ArtistList.find({});
    res.send(all);
  } catch (error) {
    console.log(`${error}`);
  }
}

module.exports = { getArtist, postArtist };
