// index.js
const express = require('express');
const app = express();
const port = 8001;

app.get('/', (req, res) => {
    res.send('Hola Mundo 1');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
