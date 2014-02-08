
var TinyRest = require('../lib/tinyrest');


describe('path', function () {
    it('should create twitter path', function (done) {
        var t = new TinyRest({provider:'twitter'});
        t.createPath('users/show')
            .should.equal('/1.1/users/show.json');
        done();
    });
    it('should create linkedin path', function (done) {
        var t = new TinyRest({provider:'linkedin'});
        t.createPath('people')
            .should.equal('/v1/people');
        done();
    });
    it('should create facebook path', function (done) {
        var t = new TinyRest({provider:'facebook'});
        t.createPath('me')
            .should.equal('/me');
        done();
    });
    it('should create bitly path', function (done) {
        var t = new TinyRest({provider:'bitly'});
        t.createPath('link/clicks')
            .should.equal('/v3/link/clicks');
        done();
    });
    it('should create stocktwits path', function (done) {
        var t = new TinyRest({provider:'stocktwits'});
        t.createPath('account/verify')
            .should.equal('/api/2/account/verify.json');
        done();
    });
    it('should create soundcloud path', function (done) {
        var t = new TinyRest({provider:'soundcloud'});
        t.createPath('tracks')
            .should.equal('/tracks.json');
        done();
    });
    it('should create rubygems path', function (done) {
        var t = new TinyRest({provider:'rubygems'});
        t.createPath('gems/rails')
            .should.equal('/api/v1/gems/rails.json');
        done();
    });
});