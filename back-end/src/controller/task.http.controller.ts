import {Router} from 'express';
import {Request, Response} from "express-serve-static-core";
import mysql from 'mysql2/promise';

const controller = Router();

controller.get('/', getAllTasks);
controller.post('/', saveTask);
controller.patch('/:id', updateTask);
controller.delete('/:id', deleteTask);
export {controller as TaskHttpController};

const pool = mysql.createPool({
    database:'dep11_todo_app',
    port:3306,
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    connectionLimit: 10
})

async function getAllTasks(req: Request, res: Response){
    if (!req.query.email) res.sendStatus(400);
    const connection = await pool.getConnection();
    const [taskList] = await connection.execute('SELECT * FROM task WHERE email = ?', [req.query.email]);
    res.json(taskList);
    pool.releaseConnection(connection);
}
function saveTask(req: Request, res: Response){
    res.send("<h1>Task Controller: Post</h1>");
}
function updateTask(req: Request, res: Response){
    res.send("<h1>Task Controller: Patch</h1>");
}
function deleteTask(req: Request, res: Response){
    res.send("<h1>Task Controller: Delete</h1>");
}

