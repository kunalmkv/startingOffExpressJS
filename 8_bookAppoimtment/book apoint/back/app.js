const path = require('path');
const errorController = require('./controllers/error');
const user = require('./models/user');

const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./util/database');
var cors = require('cors');

const app = express();
app.use(cors());


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.post('/user/add-user', async (req, res, next) => {
    try {
        if (!req.body.phone) {
            throw new Error('Phone Number not added. Its mandatory');
        }
        const name = req.body.name;
        console.log(name, '***********123*************');
        const email = req.body.email;
        const phone = req.body.phone;
        const date = req.body.date;
        const data = await user.create({ name: name, email: email, phone: phone, date: date });
        res.status(201).json({ newUserDetail: data });
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
})
app.get('/user/get-users', async (req, res, next) => {
    try {
        const users = await user.findAll();
        res.status(200).json({ allUsers: users });
    } catch (error) {
        console.log('Get user is failed', JSON.stringify(error));
        res.status(500).json({ error: error })
    }
})
app.delete('/user/delete-user/:id', async (req, res) => {
    try {
        if (req.params.id === 'undefined') {
            console.log('ID is missing');
            return res.status(400).json({ err: 'ID is missing!' });
        }
        const uId = req.params.id;
        await user.destroy({ where: { id: uId } });
        res.send(200);
    } catch (err) {
        console.log(err);
        res.send(500).json(err);
    }
})
app.use(errorController.get404);
sequelize.sync().then(result => {
    app.listen(3000);
})
    .catch(err => {
        console.log(err)
    })

