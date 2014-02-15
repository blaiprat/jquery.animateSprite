/*global jasmine, describe, it, expect*/

'use strict';

var fixtures  = jasmine.getFixtures();

// given relative path test/fixtures/ to karma
fixtures.fixturesPath = 'base/test/fixtures/';

describe('<Unit Test>', function () {
    describe('Example', function () {
        it('should have background inline', function () {
            // fixtures.load('example.html');
            // var $example = $('.example');
            // $example.defaultPluginName();
            // TODO
            expect(true).toBe(true);
        });
    });
});
