require('dotenv').config()


export const config = {
    user: process.env.USERDB,
    password: process.env.PASS,
    server: process.env.HOST,
    database: process.env.DB_NAME,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
}




