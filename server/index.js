const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Yeah, our server is up and running!');
});

app.listen(8081, () => {
    console.log('server is running on port 8081');
});