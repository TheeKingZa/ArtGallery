const express = require('express');
const cors = require('cors')
const app = express();
const port = 4000;

// Enable CORS
app.use(cors());


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
    console.log('Server is running on port 4000');
});

