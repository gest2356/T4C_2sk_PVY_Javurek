import mysql from 'mysql2/promise'

let pool;

export async function connectToMysql() {
    try {
        if (!pool) {
            pool = mysql.createPool({
                host: 'mysqlstudenti.litv.sssvt.cz',
                user: 'javurekvojtech',
                password: '123456',
                database: '4c2_javurekvojtech_db1'
            })
        }

        await pool.query("SELECT 1")
        console.log("Connected to Mysql")
        console.log(pool)
        return pool
    } catch (ex) {
        console.log(ex.message)
        return ex;
    }
}

export async function queryMysql(pool, sql, params) {
    const [rows] = await pool.query(sql, params);
    return rows;
}

