// Imports
const {
    getRoutes,
    getRoute,
    getRegion,
    getTag,
    likeRoute,
    getLikedRoutes,
    createRoute,
    deleteRoute,
    updateRoute
}= require('../controllers/routeController')

const requireAuth = require('../middleware/requireAuth')

// We create the express router
const express = require('express')
const router = express.Router()

//require auth for all routes
router.use(requireAuth)

// Get all routes
router.get('/', getRoutes)

// Get region
router.get('/region/:region', getRegion)

// Get tag
router.get('/tag/:tag', getTag)

// Like a route
router.patch('/like/:id', likeRoute)

// Get all liked routes
router.get('/liked', getLikedRoutes)

// Post a new route
router.post('/', createRoute)

// Delete a route
router.delete('/:id', deleteRoute)

// Update a route
router.patch('/:id', updateRoute)

// Get a single route
router.get('/:id', getRoute)

// Exports router
module.exports = router 