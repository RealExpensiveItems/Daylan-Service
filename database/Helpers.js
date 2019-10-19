var relateds = require('./index.js')

const helpers = {
  getAll: (callback) => {
    relateds.find({}, (err, result) => {
      if (err) {
        callback(err)
      } else {
        callback(null, result)
      }
    })
  }
}

module.exports = helpers
