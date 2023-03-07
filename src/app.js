import express from "express";
import {pool} from './db.js';
import {PORT} from './config.js'

const app =express()

app.get('/',async (req,res) => {
    const [result]= await pool.query('SELECT *FROM users')
    res.json([result])
})

app.get('/ping',async (req,res) => {
    const [result] = await pool.query(`SELECT "hello word" as RESULT`);
    //console.log(result[0])
    res.json(result[0])
})

app.get('/create', async(req,res) =>{
    const result = await pool.query('INSERT INTO users(name) VALUES ("Jhon")')
    res.json(result)
})

app.listen(PORT)
console.log('server on port', PORT)

//Logging,morgan,winston,pin,bunyan,log4js,debug,etc