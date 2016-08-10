var should = require('chai').should(),
expect = require('chai').expect,
geomean = require('../geomean');
describe('#geomean', function() {
	it('checks we get a null if we pass one or less items in array',function() {
		a = [1];
		expect(geomean.geomean(a)).to.be.null;
	});
	it('checks we get a geomean from a valid array',function() {
		a = [1, 2, 3, 4];
		expect(geomean.geomean(a)).to.equal(2.2133638394006434);
	});
	it('checks we get a null if we pass one or less items in array',function() {
		a = [1, 2, 3, 0];
		expect(geomean.geomean(a)).to.equal(1.8171205928321397);
	});
	it('checks we get a null if we pass one or less items in array',function() {
		a = [1, 2, 3];
		expect(geomean.geomean(a)).to.equal(1.8171205928321397);
	});
});
