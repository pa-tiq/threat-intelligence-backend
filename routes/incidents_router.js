const express = require('express');
const { body } = require('express-validator');

const incidentsController = require('../controllers/incidents_controller');

const router = express.Router();

router.get('/', incidentsController.getIncidents);
