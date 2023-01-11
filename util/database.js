const mysql = require('mysql2');
const keys = require('../keys.json');

const pool = mysql.createPool({
  host: 'localhost',
  //user: keys.MySQL_user,
  user: 'root',
  database: keys.MySQL_db,
  password: keys.MySQL_password,
});

//const pool = mysql.createPool({
//  host: keys.MySQL_docker_container,
//  user: keys.MySQL_docker_user,
//  database: keys.MySQL_db,
//  password: keys.MySQL_password,
//});

async function createTables(){
  await pool.promise().execute(
    `
    CREATE TABLE IF NOT EXISTS \`event\` (
      \`id\` int unsigned NOT NULL AUTO_INCREMENT,
      \`name\` varchar(255) NOT NULL,
      \`created_at\` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (\`id\`),
      UNIQUE KEY \`id_UNIQUE\` (\`id\`),
    );
    `
  );  
  await pool.promise().execute(
    `
    CREATE TABLE IF NOT EXISTS \`incident\` (
      \`id\` int unsigned NOT NULL AUTO_INCREMENT,
      \`name\` varchar(255) NOT NULL,
      \`created_at\` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (\`id\`),
      UNIQUE KEY \`id_UNIQUE\` (\`id\`),
    );
    `
  );
}

createTables();

module.exports = pool.promise();
