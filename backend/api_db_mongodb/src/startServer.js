const express = require('express');

var cors = require('cors');

const server = express();

server.use(cors());

server.use(express.json());


server.get('/lead/:id', function(req, res, next) {
    res.json({ msg: 'This is CORS-enabled for all origins!' })
})

//Rota get http://localhost:3000/lead
const leadRoutes = require('./router/leadRouters');

server.use('/lead', leadRoutes);

server.listen(8081, () => {
    console.log('API on line');

});
