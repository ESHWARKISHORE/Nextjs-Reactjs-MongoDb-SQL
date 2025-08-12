import mysql from 'mysql2';

import dotenv from 'dotenv'
dotenv.config()

export const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

pool.getConnection()
.then(conn => {
    console.log('MySQL Sever is connected');
    conn.release();
})
.catch(err => console.log(err, 'Error while connecting the mysql server'));

// const result = await pool.query("SELECT * FROM users")
// console.log(result);