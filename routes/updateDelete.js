'use strict';

const express = require('express');
const wrRoute = express.Route();
const connection = require('/db');

//Update user
udRoute.put('/users/uid', function (req, res, next) {
    connection.execute(
        "UPDATE students SET major=? WHERE id =?;",
        [req.body.major, req.params.uid])
            .than(() => {
                console.log('ok');
            }).catch((err) =>{
                console.log(err);
            });
        res.status(201).send('Update Successfully.');
});

//Delete user
udRoute.delete('/users/uid', function (req, res, next) {
    connection.execute(
        "DELETE FROM students SET WHERE id =?;",
        [req.params.uid])
            .than(() => {
                console.log('ok');
            }).catch((err) =>{
                console.log(err);
            });
        res.end;
});

udRoute.use('/',function(req, res, next){
    res.sendStatus(404);
});
module.exports = udRoute;