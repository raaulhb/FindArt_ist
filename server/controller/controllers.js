const ArtistList = require('../model/db');

async function postArtist(req, res) {
  console.log('A new artist has been created');
  const newRecord = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    style: req.body.style,
    ratings: req.body.ratings,
    about: req.body.about,
    profilePic: req.body.profilePic,
    artistMedia: req.body.artistMedia,
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

async function editArtist(req, res) {
  //console.log('req.body', req.body);
  try {
    const artist = await ArtistList.findById(req.body._id);
    const media = artist.artistMedia;
    const mediaSet = new Set(media.concat(req.body.media));
    artist.artistMedia = [...mediaSet];
    await artist.save();
    console.log(artist);
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
}

module.exports = { getArtist, postArtist, editArtist };
