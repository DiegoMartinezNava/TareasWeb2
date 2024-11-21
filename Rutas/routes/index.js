const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });// envía el archivo index.html ubicado en la carpeta raíz del proyecto
});

router.get('/generadorQR', (req, res) => {
    res.sendFile('generadorQR.html', { root: __dirname });// envía el archivo about.html ubicado en la carpeta raíz del proyecto
});

router.get('/calculadora', (req, res) => {
    res.sendFile('calculadora.html', { root: __dirname });// envía el archivo contact.html ubicado en la carpeta raíz del proyecto
});

module.exports = router;