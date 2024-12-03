const Activity = require('../models/Activity')
const Company = require('../models/Company')

const ActivityController = {
    async getActivities (req, res) {
        try {
            const filters = {
                active: true
            }
            if (req.query.category) {
                filters.category = req.query.category
            } 
            if (req.query.type) {
                filters.type = req.query.type
            }
            if (req.query.dates) {
                filters.dates = req.query.dates
            }
            if (req.query.subcategory) {
                filters.subcategory = req.query.subcategory
            }
            if (req.query.city) {
                filters['location.city'] = req.query.city
            }
            const activities = await Activity.find(filters).populate('company');
            res.json(activities)
        } catch (err) {
            console.error('Error getting data', err)
          }
    },
    async getActivitiesByCompany (req, res) {

        try {
            const company = await Company.findOne({
                uid: req.uid
            })
            const activities = await Activity.find({
                company: company._id
            }).populate('company');
            res.json(activities)
        } catch (err) {
            console.error('Error getting data', err)
          }
    },
    async getActivityByID (req, res) {
        try {
            const activity = await Activity.findById(req.params.id).populate('company')
            if (!activity) {
                return res.status(404).json({message: 'Activity not found'})
            }
            return res.json(activity)
        } catch (err) {
            console.error('Error getting activity', err)
            res.status(500).json({message: 'Server error'})
          }
    },
    async createActivity(req, res) {
        try {
            const company = await Company.findOne({
                uid: req.uid
            })
            req.body.company = company;
            const activity = await Activity.create(req.body)
            return res.json(activity)
        } catch (err) {
            console.error('Error creating activity', err)
          }
    },
    async updateActivity(req, res) {
        try {
            const activityToUpdate =  {
                id: req.params.id,
                name: req.body.name,
                category: req.body.category,
                description: req.body.description,
                company: req.body.company,
                image: req.body.image,
                location: {
                    city: req.body.location.city,
                    address: req.body.location.address,
                    numaddress: req.body.location.numaddress
                },
                startdate: req.body.startdate,
                enddate: req.body.enddate,
                price: req.body.price,
                duration: req.body.duration,
                active: req.body.active,
            }

            const activity = await Activity.findByIdAndUpdate(
                req.params.id, activityToUpdate,{new: true}
            )
            res.json(activity)

        } catch (err) {
            console.error('Error updating activity', err)
          }
    },
    async deleteActivity(req, res) {
        try {
            const activityId = req.params.id
            const activity = await Activity.findByIdAndDelete(activityId)
            res.json(activity)
        } catch (err) {
            console.error('Activity could not be deleted', err)
          }
    },

}

module.exports = ActivityController