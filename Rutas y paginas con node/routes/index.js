const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });// envía el archivo index.html ubicado en la carpeta raíz del proyecto
});

router.get('/info', (req, res) => {
    res.sendFile('info.html', { root: __dirname });// envía el archivo about.html ubicado en la carpeta raíz del proyecto
});

router.get('/contacto', (req, res) => {
    res.sendFile('contacto.html', { root: __dirname });// envía el archivo contact.html ubicado en la carpeta raíz del proyecto
});

module.exports = router;