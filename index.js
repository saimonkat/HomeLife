const express = require('express');

const app = express();

const PORT = process.env.PORT || 80;

app.get('/', (req, response) => {
    response.end(`
    <h1>Home</h1>
    <div>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
        </ul>
    </div>
    `);
});

app.get('/about', (req, response) => {
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

