const express = require('express');
const app = express();
const bodyParser = require("body-parser")
const session = require("express-session")
var router = require("./routes/routes")
const cors = require('cors');




app.set("view engine", "ejs")


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(express.static("public"))

app.use(session({
  secret: "fofinho", cookie: {maxAge: 100000000}
}))

app.use("/", router)



const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const jQuery = require('jquery');

// Simule um ambiente de navegador carregando um documento HTML
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

// Use jQuery no ambiente jsdom
const $ = jQuery(dom.window);

app.use(cors());


app.get('/', (req, res) => {
  res.render("index.ejs");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
