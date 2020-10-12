const express = require('express');
const app = express();

app.get('/', (req, rest) => {
    rest.status(200).send({ message: 'Olá mundo esse é meu novo repesitório clonado.'})
})

app.listen(4001, () => {
    console.log('Api inializada na porta 4001');
})