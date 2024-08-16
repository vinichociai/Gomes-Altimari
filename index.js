const express = require('express');
const app = express();
const bodyParser = require("body-parser")
const session = require("express-session")
var http = require("http").createServer(app)
var io = require("socket.io")(http)
var router = require("./routes/routes")(io)

io.on("connection", (socket) =>{

  socket.on("disconnect", (socket) =>{
      console.log("X desconectou" + socket.id)
  })

  socket.on("teste", (data) =>{
      console.log(data)
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

const port = 3000;
http.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
