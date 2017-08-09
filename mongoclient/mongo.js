var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
var TABLE_NAME = 'family';
var db = null;

exports.init = function(cb, cbargs) {
  console.log('starting mongodb');
  MongoClient.connect(url, function(err, dbConn) {
    if (err) throw err;
    db = dbConn;
    console.log('mongodb started');
    next(cb, cbargs);
  });
}

exports.createTable = function(cb, cbargs) {
  db.listCollections({name: TABLE_NAME})
    .next(function(err, collinfo) {
      if (!collinfo) {
      db.createCollection(TABLE_NAME);
    }
    console.log('Table created!');
    next(cb, cbargs);
  });
}

exports.createRecord = function(record, cb, cbargs) {
  db.collection(TABLE_NAME).insertOne(record, function(err, res) {
    if (err) throw err;
    console.log("1 record inserted ");
    next(cb, cbargs);
  });
}

var next = function(cb, cbargs) {
  if(cb === undefined)
    closeDB();
  else if(typeof cb === 'function')
    cb(cbargs);
}

var closeDB = function(db) {
  db.close();
  console.log('Connection closed');
}
