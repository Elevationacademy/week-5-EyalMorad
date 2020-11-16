
const consts2 = require("./consts")
const complaintsHandler = require("./complaintsHandler")



let complaint1 = {
    text: "I'm not getting enough money",
    type: consts2.obj.FINANCE
}

let complaint2 = {
    text: "My salary hasn't come in yet",
    type: consts2.obj.FINANCE
}

let complaint3 = {
    text: "I'm always full of energy",
    type: consts2.obj.EMOTIONS
}

complaintsHandler.handleComplaints(complaint1) //should print "Money doesn't grow on trees, you know."
complaintsHandler.handleComplaints(complaint2) //should print "Money doesn't grow on trees, you know."
complaintsHandler.handleComplaints(complaint3) //should print "It'll pass, as all things do, with time."