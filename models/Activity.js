const mongoose = require ('mongoose');

const ActivitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    }, 
    location: {
        city:{
            type: String,
            required: true
        },
        address:{
            type: String,
            required: true
        },
        numaddress: {
            type: Number,
            required: true
        }
    },
    startdate: {
        type: Date,
        required: true
    },
    enddate: {
        type: Date,
        required: true
    },
    price: {
        type: Number
    },
    duration: {
        type: String,
    }
}, { timestamps: true }
)

const Activity = mongoose.model('Activity', ActivitySchema);

module.exports = Activity