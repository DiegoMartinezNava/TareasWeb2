const express = require('express');
const path = require('path');
const app = express();
const port = 3006;

const routes = require('./routes');

app.use('/', routes);

app.use(express.static(path.join(__dirname, 'routes')));

app.listen(port, () => {
    console.log(`El servidor está funcionando en http://localhost:${port} :)`);
});
