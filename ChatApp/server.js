var express = require("express")
var mongoose = require("mongoose")
var bodyParser = require("body-parser")
var Schema = mongoose.Schema

var app = express()
var http = require("http").Server(app)
var io = require("socket.io")(http)

try {
    var conString = "mongodb://yong:yong@ds237669.mlab.com:37669/sarie_database"
    app.use(express.static(__dirname))
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))

    mongoose.Promise = Promise
    const chatSchema = new Schema({
        name: String,
        chat: String
    }, {
        collection: 'chats'
    })
    var Chats = mongoose.model("chats", chatSchema)

    mongoose.connect(conString, () => {
        console.log("DB is connected")
        }).catch((e) => {
            console.log(e)
        })

    app.post("/chats", async (req, res) => {
        try {
            var chat = new Chats(req.body)
            await chat.save()
            res.sendStatus(200)
            io.emit("chat", req.body)
        } catch (error) {
            res.sendStatus(500)
            console.error(error)
        }
    })

    app.get("/chats", (req, res) => {
        Chats.find({}, (error, chats) => {
            res.send(chats)
        })
    })

    io.on("connection", (socket) => {
        console.log("Socket is connected...")
    })
    
    var server = http.listen(3020, () => {
        console.log("Well done, now I am listening on ", server.address().port)
    })

} catch(e) {

}