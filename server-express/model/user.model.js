import { pool } from '../config/sql-database-connection.js'

export async function getAllUsers(){
    const [rows] = await pool.query('SELECT * FROM users');
    // console.log(rows);
    return rows;
}