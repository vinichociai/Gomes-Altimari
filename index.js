const express = require('express');
const app = express();
const bodyParser = require("body-parser")
const session = require("express-session")
var http = require("http").createServer(app)
var io = require("socket.io")(http)
var router = require("./routes/routes")(io)
const knex = require('./database/connection'); 
io.on("connection", (socket) =>{

  socket.on("disconnect", (socket) =>{
  })


})


app.set("view engine", "ejs")


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(express.static("public"))



app.use("/", router)




const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const jQuery = require('jquery');

const dom = new JSDOM(`
<!DOCTYPE html>
<html>
<head>
    <title>jQuery with Node.js</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <div id="content">This is some content</div>
</body>
</html>
`);

const $ = jQuery(dom.window);
 
app.get('/', (req, res) => {
  res.render("index.ejs");
});


knex.raw('SELECT 1')
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch(err => {
    console.error('Erro ao conectar-se ao banco de dados:', err);
    process.exit(1);
  });


const port = 3000;
http.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
