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

async function insertpizza(nombre, IsLibreGluten, importe, descripcion){
    const [result, fields] = await connection.query(
        "INSERT INTO pizza (nombre, libreGluten, importe, descripcion) VALUES (?, ?, ?, ?)",
        [nombre, IsLibreGluten, importe, descripcion]
    );
}

async function update(nombre, IsLibreGluten, importe, descripcion, id){
    const [result, fields] = await connection.query(
        "UPDATE pizza SET nombre = ?, libreGluten = ?, importe = ?, descripcion = ? WHERE id = ?",
        [nombre, IsLibreGluten, importe, descripcion, id]
    );
}

async function deleteById(id){
    const [result, fields] = await connection.query(
        "DELETE FROM pizza WHERE id = ?",
        [id]
    );
}