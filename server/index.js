const express = require('express');
const app = new express();
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 3000;
const router = require('./router');

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`-----------> Server is listening at port: ${PORT}`);
});
