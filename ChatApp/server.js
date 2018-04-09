var express = require("express")
var mongoose = require("mongoose")
var Schema = mongoose.Schema
var app = express()

app.listen("3010",()=>{
    console.log("I just started listening!.")
})

try {
    var conString = "mongodb://yong:yong@ds237669.mlab.com:37669/sarie_database"
    mongoose.Promise = Promise
    const chatSchema = new Schema({
        name: String,
        chat: String
    }, {
        collection: 'chats'
    })
    var Chats = mongoose.model("chats", chatSchema)
    var dummyUser = {
        name: "Arros",
        chat: "Hello World"
    }

    mongoose.connect(conString, () => {
        console.log("DB is connected")
        saveData()
        }).catch((e) => {
            console.log(e)
        })

    async function saveData() {
        var user = new Chats(dummyUser);
        let tmp = await user.save();
    }
} catch(e) {

}