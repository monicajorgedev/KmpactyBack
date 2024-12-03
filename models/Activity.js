const mongoose = require ('mongoose');

const ActivitySchema = new mongoose.Schema({
    company: {
        type: mongoose.Types.ObjectId, 
        ref: "Company"},
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
    location: {
        city: {
            type: String,
            required: true
        }, 
        address: {
            type: String,
            required: true
        }
    },
    dates: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    }, 
    active: {
        type: Boolean,
        required: true,
        default: true
    }, 
    
}, { timestamps: true }
)

const Activity = mongoose.model('Activity', ActivitySchema);

module.exports = Activity