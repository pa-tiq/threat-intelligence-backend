const db = require('../util/database');

module.exports = class Event {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  save() {
    return db.execute(
      `INSERT INTO events (name) 
      VALUES (?)`,
      [this.name]
    );
  }
  update() {
    return db.execute(
      'UPDATE events SET name = ? WHERE id = ?',
      [this.name]
    );
  }

  static fetchAll() {
    return db.execute('SELECT * FROM events');
  }  
};