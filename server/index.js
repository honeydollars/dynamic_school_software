const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Yeaay, server is up and running!');
});

app.listen(8080, () => {
    console.log('server is running on port 8080');
});