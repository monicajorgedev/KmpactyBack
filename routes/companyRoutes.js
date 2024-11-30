const express = require('express');
const router = express.Router();
const CompanyController = require('../controllers/companyController')
const verifyToken = require('../middleware/auth')


router.get('/company', verifyToken, CompanyController.getCompany)
router.post('/company', CompanyController.createCompany)
router.put('/company', verifyToken, CompanyController.updateCompany)

module.exports = router