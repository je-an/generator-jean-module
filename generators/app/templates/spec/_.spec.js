// jscs:disable
// jshint ignore:start
define([
    "<%= constructor %>"
], function (<%= constructor %>) {
    describe('<%= constructor %>.spec.js', function () {
        var instance;
        beforeEach(function () {
            instance = new <%= constructor %>();
        });
        describe("<%= constructor %>", function () {
            it("TODO: Check if all members are available | EXPECTATION: <%= constructor %> has all necessary members", function () {
                var numberOfMembers = 0;
                expect(Object.keys(instance).length).toEqual(numberOfMembers);
            });
            it("TODO: Check if all methods are available | EXPECTATION: <%= constructor %> has all necessary methods", function () {
                var numberOfMethods = 0;
                var methodCount = Object.keys(Object.getPrototypeOf(instance)).length;
                expect(methodCount).toEqual(numberOfMethods);
            });
        });
    });
});

