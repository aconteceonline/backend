const express = require('express');
const cors = require('cors');
const app = express();


//const port = 3000; //porta padrão
const mysql = require('mysql8');


//const leadRoutes = require('./router/leadRouters');
//
//server.use('/lead', leadRoutes);


function execSQLQuery(sqlQry, res){
  const connection = mysql.createConnection({
    host: "localhost",
    port: 3308,
    user: "root",
    password: "Saf#@9182",
    database: "db_lead"
  });
  connection.query(sqlQry, (error, results, fields) => {
      if(error)
        res.json(error);
      else
        res.json(results);
      connection.end();
      console.log('executou!');
  });
}
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => res.json({ message: 'Funcionando!' }));

//app.get('/lead/:id', function(req, res, next) {
//    res.json({ msg: 'This is CORS-enabled for all origins!' })
//})



//inicia o servidor
//app.listen(port);
//console.log('API funcionando!');

app.listen(8081, () => {
    console.log('API on line');

});

app.get('/lead', (req, res) => {
    execSQLQuery('SELECT * FROM t_lead', res);
});

app.get('/lead/:id?', (req, res) => {
    let filter = '';
    if(req.params.id) filter = ' WHERE ID=' + parseInt(req.params.id);
    execSQLQuery('SELECT * FROM t_lead' + filter, res);
})