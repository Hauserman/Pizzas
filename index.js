import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "rootroot",
    database: "pizzeria",
}); 

async function getAll(){
    const [result, fields] = await connection.query("SELECT * FROM Pizza");
    console.log(result);
}

getAll()