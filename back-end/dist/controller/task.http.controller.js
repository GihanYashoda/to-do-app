import { Router } from 'express';
import mysql from 'mysql2/promise';
const controller = Router();
controller.get('/', getAllTasks);
controller.post('/', saveTask);
controller.patch('/:id', updateTask);
controller.delete('/:id', deleteTask);
export { controller as TaskHttpController };
const pool = mysql.createPool({
    database: 'dep11_todo_app',
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    connectionLimit: 10
});
async function getAllTasks(req, res) {
    if (!req.query.email)
        res.sendStatus(400);
    const connection = await pool.getConnection();
    const [taskList] = await connection.execute('SELECT * FROM task WHERE email = ?', [req.query.email]);
    res.json(taskList);
    pool.releaseConnection(connection);
}
async function saveTask(req, res) {
    const task = req.body;
    const connection = await pool.getConnection();
    const [{ insertId }] = await connection.execute('INSERT INTO task (description, status, email) VALUES (?, false, ?)', [task.description, task.email]);
    pool.releaseConnection(connection);
    task.id = insertId;
    task.status = false;
    res.status(201).json(task);
}
function updateTask(req, res) {
    res.send("<h1>Task Controller: Patch</h1>");
}
function deleteTask(req, res) {
    res.send("<h1>Task Controller: Delete</h1>");
}
//# sourceMappingURL=task.http.controller.js.map