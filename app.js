const express = require ('express');
const dotenv = require ('dotenv');

const app = express();
dotenv.config;

const PORT = process.env.NODE.PORT || 3042;

app.use (express.json());
app.use (express.urlencoded({ extended: true }));

const writeRead = require ('./routes/writeRead.js');
const updateDelete = require ('./routes/updateDelete.js');

app.use('/wr',writeRead);
app.use('/ud',updateDelete);

app.use ((req,res,next) => {
    res.sendStatus(404);
});

app.listen (PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});