'use strict';

const express = require('express');
const crypto = require("crypto");
const wrRoute = express.Route();
const connection = require('/db');

//Create user
wrRoute.post('/users', function (req, res, next) {
    connection.execute(
        `INSERT INTO students (first_name, last_name, email, major, enrollment_year)VALUE (?,?,?,?,?);`,
        [req.body.first_name, req.body.last_name,
            req.body.email,req.body.major, req.body.enrollment_year])
            .than(() => {
                console.log('ok');
                res.status(201).send('Insert Successful');
            }).catch((err) =>{
                console.log(err);
                res.status(500).send('Insert Failed!');
            });
});
//Read user
wrRoute.get('/users', function (req, res, next) {
    connection.execute(
        `SELECT * FROM students;`)
        .than((result) => {
            const rawData = result[0];
            res.json(rawData);
        }).catch((err) =>{
            console.log(err);
            res.status(500).send('Read Failed!');
        });    
});
//Check user
/*wrRoute.post('/check', function (req, res, next) {
    connection.execute(
        `SELECT * FROM students;`)
        .than((result) => {
            const rawData = result[0];
            res.json(rawData);
        }).catch((err) =>{
            console.log(err);
            res.status(500).send('Read Failed!');
        });    
});*/
module.exports = udRoute;