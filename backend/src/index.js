const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

//Desenvolvimento
app.use(cors());

//Aplicação  Hospedagem
/*app.use(cors({
    origin: 'http://meuapp.com.br'
}));*/

// Importante para fazer o JSON virar javascript na aplicação
app.use(express.json());
app.use(routes);

app.listen(3333);
