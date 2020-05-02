const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 80;

app.use(express.static(path.join(__dirname, '../app')));

app.get('/', (req, response) => {
    response.sendFile(path.join(__dirname, '../app/index.html'));
});

app.get('/createEvent', (req, response) => {
    response.end(`
        <h1>About</h1>
        <div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </div>
    `);
});

app.listen(PORT, () => {
    console.log('Server has been started...');
})

