const express = require('express');
const router = express.Router();
const CompanyController = require('../controllers/companyController')


router.get('/companies', CompanyController.getCompanies)
router.get('/companies/:id', CompanyController.getCompanyByID)
router.post('/companies', CompanyController.createCompany)
router.put('/companies/:id', CompanyController.updateCompany)
router.delete('/companies/:id',  CompanyController.deleteCompany)

module.exports = router