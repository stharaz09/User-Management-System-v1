const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
dotenv.config()

app.use(bodyParser.urlencoded({extended:true}))

app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'))



route = require(__dirname + '/server/routes/user')

app.use('/', route)


app.listen(process.env.port, function(){
    console.log("Server connected successfully!!");
})