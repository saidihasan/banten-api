const express = require('express')
const app = express()
const port = 3000
const bodyParser = require("body-parser")
const controller = require("./controllers/controller")

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

var routes = require("./routes")
routes(app)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))