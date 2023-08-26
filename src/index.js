const express = require('express')

const sequelize = require('./db/index')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
    sequelize.sync({ force: true }).then(() => {
        console.log('woo');
    })
    console.log('app is running');
})