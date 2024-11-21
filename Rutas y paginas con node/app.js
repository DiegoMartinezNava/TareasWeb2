const express = require('express');
const app = express();
const port = 3002;

const routes = require('./routes');

app.use('/', routes);

app.listen(port, () => {
    console.log(`El servidor si está funcionando en http://localhost:${port} :)`);
});