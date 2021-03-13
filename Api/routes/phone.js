var express = require("express");
var Phone = require('../model/phone');
const router = express();

router.post('/createphone', (req,res)=>{
  console.log(res.data)
  db.collection('phones').insertOne(
      {   name: req.body.name,
        type: req.body.type,
        price: req.body.price,
        rating: req.body.rating,
        warranty_years: req.body.warranty_years,
        available: req.body.available
      }, function(err, res) {
         if (err) throw err;
         console.log("1 document inserted");
      });
})


router.get('/test', (req,res)=>{
    //console.log(Phone.find({}).array())
     Phone.find({}, function(err, result) {
        if (err) {
          console.log(err);
        } else {
            console.log(result);
          res.json(result);
        }
      });
})

module.exports = function(){ router };