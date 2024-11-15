const express = require('express');
const router = express.Router();
const ActivityController = require('../controllers/activityController')


router.get('/activities', ActivityController.getActivities)
router.get('/activities/:id', ActivityController.getActivityByID)
router.post('/activities', ActivityController.createActivity)
router.put('/activities/:id', ActivityController.updateActivity)
router.delete('/activities/:id',  ActivityController.deleteActivity)

module.exports = router