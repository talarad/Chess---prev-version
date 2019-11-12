const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
app.set('trust proxy', 1)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});
app.post('/site', (req, res) => {
    res.send({ hi: 'Helloing the world' });
})