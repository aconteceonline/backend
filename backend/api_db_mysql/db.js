import mysql from "mysql";

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Saf#@9182",
    database: "dbLead_mysql"
})