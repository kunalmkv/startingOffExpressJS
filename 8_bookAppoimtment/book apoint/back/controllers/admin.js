const user = require('../models/user');
exports.postAddUser = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const date = req.body.date;
    user.create({
        name: name,
        email: email,
        phone: phone,
        date: date
    }).then(result => {
        console.log('Created Product');
        res.redirect('/admin/products');
    }).catch(err => {
        console.log(err);
    })
};
