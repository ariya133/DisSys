var express = require("express")
var mongoose = require("mongoose")
var bodyParser = require("body-parser")
var Schema = mongoose.Schema

var app = express()
var http = require("http").Server(app)
var io = require("socket.io")(http)
var port = 8080;

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

    app.get("/chats", (req, res) => {

        Chats.find({}, (error, chats) => {
            //console.log(chats);
            res.send(chats)
        })
    })

    io.on("connection", (socket) => {
        //console.log("Client is connected... >" + socket.conn.remoteAddress)

        socket.on('chat', function(message) {
            var chat = new Chats(message)
            chat.save()
            io.emit("chat", message)
            // แสดงข้อมูลที่ได้ ออกมาทาง console
            console.log(message);
        });
    })
    
    var server = http.listen(port, () => {
        console.log("Well done, now I am listening on ", server.address().port)
    })

} catch(e) {
<<<<<<< HEAD
   
}
=======

}
>>>>>>> f3342ac342bd76f05b1b8bcb4a51b1b14445946b
