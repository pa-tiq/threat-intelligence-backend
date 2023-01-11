const fs = require('fs');
const path = require('path');

const Incident = require('../models/incident');

exports.getEvents = (req, res, next) => {
  Incident.fetchAll()
    .then(([incidents]) => {
      res.status(200).json({ message: 'Eventos obtidos', incidents: incidents }); // 200 = success
    })
    .catch((error) => {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    });
};
