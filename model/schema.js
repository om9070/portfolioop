const mongoose = require("mongoose");

const data = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("cvdata", data);