var expect = require("chai").expect;

var th = require("./");
th.log({info: function(){}});

describe("telehash-promise", function() {
  it("should allow to use Promise API", function() {
    return th.generate().then(function(id) {
      expect(id).to.be.an("object");
      return th.mesh({id: id});
    }).then(function(mesh) {
      expect(mesh).to.be.an("object");
    });
  });
});
