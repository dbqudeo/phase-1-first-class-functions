function receivesAFunction (fun) {
    fun ()
}

function returnsANamedFunction () {
    return function hello () {}
}

function returnsAnAnonymousFunction() {
    return function() {}
}


/*
  describe("returnsAnAnonymousFunction()", () => {
    var fn;

    before(() => {
      fn = returnsAnAnonymousFunction();
    });

    it("returns a function", () => {
      expect(fn).to.be.a("function");
    });

    it("returns an anonymous function", () => {
      expect(fn.name).to.eql("");
    });
  });
});
*/