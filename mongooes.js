// const mongoose = require('mongoose');

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/test');

// }
// Find all the information about each product 
db.task.find()

// find the product price which are between 400 t0 800

db.task.find({product_price:{$gt:400,$lt:800}});

// find the product price which are not between 400 t0 600

db.task.find({product_price:{$lt:400,$gt:600}});

// list the four product which are greater than 500 in price

db.task.find({product_price:{$gt:500}}).limit(4)

// find the proudct name and proudct material of each product

db.task.find({},{product_name:1,product_material:1})

// find the product with a row id of 10

db.task.find({id:"10"})

// find only the proudct name and product material

db.task.find({},{product_name:1,product_material:1},_id:0)

// find the products which contain the value of soft in product material

db.task.find({},{product_material:"soft"})

// find the product which contain the product color ingido and product price 492

db.task.find({},{product_color:"indigo",product_price:492})

// Delete the product which product price value are 28

db.deleteOne({product_price:28})