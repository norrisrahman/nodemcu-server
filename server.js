const express = require("express");
const bodyParser = require("body-parser");
const db = require('./config/dbConfig')

const dataDHT = require('./api/dht.controller');

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get(db);

//Router
app.use('/api/datasensor', dataDHT);

app.get('/', (req,res) => {
    res.send("Haloo BOSS");
})

const PORT = process.env.PORT || 8080;

app.listen(PORT,  ()=> console.log(`Server berjalan di ${PORT}`));
