const mongoose = require ('mongoose');

const CompanySchema = new mongoose.Schema({
    name: {
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
    phone:{
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Por favor, ingresa un correo válido']
      },
    imgUrl: {
        type: String,
        required: true
    }
}, { timestamps: true }
)

const Company = mongoose.model('Company', CompanySchema);

module.exports = Company