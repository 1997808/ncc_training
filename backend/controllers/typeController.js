//https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
var { db } = require("../configs/db")

// Display list of all types.
exports.type_list = (req, res) => {
  db.collection("types").find({}).toArray((err, result) => {
    if (err) throw err;
    else res.send(result);
  });
};

// Handle type create on POST.
exports.type_create = (req, res) => {
  var obj = {
    name: req.body.name
  }
  db.collection("types").insertOne(obj, (err, result) => {
    if (err) {
      console.log(err);
      res.send('error');
    }
    else {
      res.send('success');
    }
  });
};

// Handle type delete on POST.
exports.type_delete = (req, res) => {
  db.collection("types").findOneAndDelete({ "_id": new mongo.ObjectId(req.params.id) }, (err, result) => {
    if (err) throw err;
    else {
      res.send("1 type deleted");
    }
  })
};

// Handle type update on POST.
exports.type_update = (req, res) => {
  var newvalues = { $set: { name: req.body.name } };
  db.collection("types").findOneAndUpdate({ "_id": new mongo.ObjectId(req.params.id) }, newvalues, function (err, res) {
    if (err) throw err;
    else res.send("1 type updated")
  });
};