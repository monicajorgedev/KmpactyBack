const mongoose = require ('mongoose');

const ActivitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    subcategory: {
        type: String,
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
        type: String,
        required: true
    },
    dates: {
        type: String,
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