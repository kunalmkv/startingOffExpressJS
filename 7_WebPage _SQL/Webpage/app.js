const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

/*db.execute('SELECT * FROM products').then(result => {
    console.log(result[0]);

}).catch(err => {
    console.log(err);
})*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => { //req is not a normal request but a sequelised object having SQL properties
    User.findByPk(1).then(user => {
        req.user = user;
        next();
    }).catch(err => console.log(err));
})
app.use('/admin', adminRoutes);
app.use(shopRoutes);
Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });



app.use(errorController.get404);

//server starts from here. Above are middleawre functions that will be executed ionly after incoming requests
sequelize
    //.sync({ force: true })
    .sync()
    .then(result => {
        return User.findByPk(1);
        //console.log(result);

    })
    .then(user => {
        if (!user) {
            return User.create({ name: 'Max', email: 'test@test.com' })
        }
        return user;
    }).then(user => {
        user.createCart();


    }).then(cart => { app.listen(3000); })
    .catch(err => {
        console.log(err)
    })

