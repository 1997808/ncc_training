const { MongoClient } = require('mongodb')

// Connection URL
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)

client.connect(err => {
  // Database Name
  console.log('Connected successfully to server')
  const dbName = 'ncc_training'
  exports.db = client.db(dbName)
})