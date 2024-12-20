const mongoose = require ('mongoose');

const CompanySchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
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
    web: {
        type: String,
        required: false,
    }
}, { timestamps: true }
)

const Company = mongoose.model('Company', CompanySchema);

module.exports = Company