const mysql2 = require('mysql2');
const dotenv = require('dotenv');

dotenv.config;

const connection = mysql.createPool({
    host : process.env.HOST,
    user : process.env.USER,
    database : process.env.DATABASE,
    pasword : process.env.PASSWORD,
    port : process.env.PORT
});

module.exports = connection.promise();