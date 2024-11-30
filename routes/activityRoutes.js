const express = require('express');
const router = express.Router();
const ActivityController = require('../controllers/activityController');
const verifyToken = require('../middleware/auth');


router.get('/activities', ActivityController.getActivities)
router.get('/activities/by-company', verifyToken ,ActivityController.getActivitiesByCompany)
router.get('/activities/:id', ActivityController.getActivityByID)
router.post('/activities', verifyToken, ActivityController.createActivity)
router.put('/activities/:id', verifyToken, ActivityController.updateActivity)
router.delete('/activities/:id',  verifyToken, ActivityController.deleteActivity)

module.exports = router