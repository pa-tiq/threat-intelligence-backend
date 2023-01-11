const express = require('express');
const { body } = require('express-validator');

const eventsController = require('../controllers/events_controller');

const router = express.Router();

router.get('/', eventsController.getEvents); 
