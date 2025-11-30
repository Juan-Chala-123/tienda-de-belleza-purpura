import mysql from 'mysql2/promise';

const connectionUrl = process.env.DATABASE_URL;

export const db = await mysql.createConnection(connectionUrl);