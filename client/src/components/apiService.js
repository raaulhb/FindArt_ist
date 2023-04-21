const URL = 'http://localhost:3000';

export const postArtist = async (newArtist) => {
  const response = await fetch(URL + '/artists', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newArtist),
  })
    .then((response) => response.json())
    .catch((error) => {});
  return response;
};

export const getArtists = async () => {
  const all = await fetch(URL + '/artistList');
  return all.json();
};
