const db = require('../util/database');

module.exports = class Incident {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  save() {
    return db.execute(
      `INSERT INTO incidents (name) 
      VALUES (?)`,
      [this.name]
    );
  }
  update() {
    return db.execute(
      'UPDATE incidents SET name = ? WHERE id = ?',
      [this.name]
    );
  }

  static fetchAll() {
    return db.execute('SELECT * FROM incidents');
  }  
};