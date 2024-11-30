const Company = require('../models/Company')

const CompanyController = {
    async getCompany (req, res) {
        try {
            const filters = {
                uid: req.uid
            }
            console.log(filters)
            const companies = await Company.findOne(filters);
            console.log(companies)
            res.json(companies)
        } catch (err) {
            console.error('Error getting the company', err)
          }
    },
    async createCompany(req, res) {
        try {
            const company = await Company.create(req.body)
            res.json(company)
        } catch (err) {
            console.error('Error creating the company', err)
            
          }
    },
    async updateCompany(req, res) {
        try {
            const companyToUpdate = {
                name: req.body.name,
                location: {
                    city: req.body.location.city,
                    address:req.body.location.address,
                    numaddress: req.body.location.numaddress
                },
                phone: req.body.phone,
                email: req.body.email,
                imgUrl: req.body.imgUrl
            }

            const company = await Company.findByIdAndUpdate(
                req.params.id, companyToUpdate, {new: true}
            )
            res.redirect(`/companies/${req.params.id}`)
        } catch (err) {
            console.error('Error updating the company', err)
          }
    },
}
module.exports = CompanyController