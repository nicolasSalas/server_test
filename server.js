var express = require("express")
var auth = require("./config/functions/token")
var path = require("path")
var cors = require("cors")
var app = express()

app.use(express.static(path.join(__dirname, "src")))

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.use(cors())


app.get("/", function(request, resp, next) {
  resp.render("index")
})

var InsertUser = require("./Server/User/_Insert")


app.use(
  "/webservices",
  InsertUser,
)

app.listen(9001, function() {
  console.log("El servidor Esta En llamas in 9001 port")
  console.log("JERA ", auth.createToken({ data: "welcome" }))
})
