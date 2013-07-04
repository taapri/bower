var list = require('../../lib/list'),
    expect = require('chai').expect;

describe('list module', function () {

    describe('requiring the list module', function () {

        it('should expose a list method', function () {
            expect(typeof list === 'function').to.be.ok;
        });

        it('should expose a initCache method', function () {
            expect(list.initCache).to.be.ok;
            expect(typeof list.initCache === 'function').to.be.ok;
        });

        it('should expose a clearCache method', function () {
            expect(list.clearCache).to.be.ok;
            expect(typeof list.clearCache === 'function').to.be.ok;
        });

        it('should expose a ClearRuntimeCache method', function () {
            expect(list.clearCache).to.be.ok;
            expect(typeof list.clearCache === 'function').to.be.ok;
        });

    });

});
