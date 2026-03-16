import mysql from 'mysql'

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
        return pool
    } catch (ex) {
        console.log(ex.message)
        return ex;
    }
}

export async function qeryMyql(pool, query) {
    let res = await pool.query(query)
}

const poold = await connectToMysql();
const responese = await poold.query("SELECT * FROM rooms");

console.log(responese.rows)