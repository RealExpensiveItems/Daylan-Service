var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/REI', {useNewUrlParser: true})

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

var viewedSchema = mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  image: String,
  rating: Number,
  price: Number,
  reviewers: Number,
  category: String
})

var relateds = mongoose.model('relateds', viewedSchema)


module.exports = relateds;
