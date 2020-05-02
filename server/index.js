const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 80;

app.use(express.static(path.join(__dirname, '../app')));

app.get('/', (req, response) => {
    response.sendFile(path.join(__dirname, '../app/index.html'));
});

app.listen(PORT, () => {
    console.log('Server has been started...');
})

