const fs = require('fs');
const path = require('path');

const Event = require('../models/event');

exports.getEvents = (req, res, next) => {
  Event.fetchAll()
    .then(([events]) => {
      res.status(200).json({ message: 'Eventos obtidos', events: events }); // 200 = success
    })
    .catch((error) => {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    });
};
