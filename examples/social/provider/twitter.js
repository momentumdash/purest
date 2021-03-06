
var Purest = require('../../../')


function Twitter (options) {
  this.client = new Purest(options)
}

Twitter.prototype.user = function (options, done) {
  this.client.query()
    .get('users/show')
    .where({screen_name:options.name})
    .auth(options.token, options.secret)
    .request(function (err, res, body) {
      if (err) return done(err)
      var data = {
        id:body.id_str,
        username:body.screen_name,
        name:body.name,
        avatar:body.profile_image_url_https,
        type:'twitter'
      }
      done(null, res, body, data)
    })
}

exports = module.exports = Twitter
