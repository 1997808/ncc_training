var { db } = require("../configs/db")
var mongo = require('mongodb')

// Display list of all categories.
exports.category_list = (req, res) => {
  db.collection("categories").find({}).toArray((err, result) => {
    if (err) throw err;
    else res.send(result);
  });
};

// Handle category create on POST.
exports.category_create = (req, res) => {
  var obj = {
    name: req.body.name,
    type: new mongo.ObjectId(req.body.type)
  }
  db.collection("categories").findOne({ "name": req.body.name }, (err, result) => {
    if (err) throw err;
    else if (result == null) {
      db.collection("categories").insertOne(obj, (err, result) => {
        if (err) throw err;
        else {
          res.send("success");
        }
      });
    } else {
      res.send("already existed");
    }
  });
}

// Handle category delete on POST.
exports.category_delete = (req, res) => {
  db.collection("categories").findOneAndDelete({ "_id": new mongo.ObjectId(req.params.id) }, (err, result) => {
    if (err) throw err;
    else {
      res.send("1 category deleted");
    }
  })
};

// Handle category update on POST.
exports.category_update = (req, res) => {
  db.collection("categories").findOne({ "name": req.body.name }, (err, result) => {
    if (err) throw err;
    else if (result == null) {
      var newvalues = { $set: { name: req.body.name, type: new mongo.ObjectId(req.body.type) } };
      db.collection("categories").findOneAndUpdate({ "_id": new mongo.ObjectId(req.params.id) }, newvalues, function (err, result) {
        if (err) throw err;
        else res.send("1 category updated")
      });
    } else {
      res.send("already existed");
    }
  });
};