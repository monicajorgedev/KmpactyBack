const Company = require('../models/Company')

const CompanyController = {
    async getCompanies (req, res) {
        try {
            const filters = {}
            if (req.query.category) {
                filters.category = req.query.category
            }
            const companies = await Company.find(filters);
            res.json(companies)
        } catch (err) {
            console.error('Error getting the company', err)
          }
    },
    async getCompanyByID(req, res) {
        try {
            const company = await Company.findById(req.params.id)
            if (!company) {
                return res.status(404).json({message: 'Company not found'})
            }
            return res.json(company)
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
    async deleteCompany(req, res) {
        try {
            const companyId = req.params.id
            const company = await Company.findByIdAndDelete(companyId)
            res.json(company)
        } catch (err) {
            console.error('Company could not be deleted', err)
          }
    },

}
module.exports = CompanyController