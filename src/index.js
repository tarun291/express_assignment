const express = require('express')

const sequelize = require('./db/index')
const ApiRoutes = require('./routes/index');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', ApiRoutes);

app.listen(3000, () => {
    sequelize.sync({ force: true }).then(() => {
        console.log('woo');
    })
    console.log('app is running');
})