var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
// not working this import of jquery
// var $ = require('jquery');
// var $ = require('jQuery');
// need to add Jquery to alias in webpack config
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');


/*
only for autocomplete code 
 */
// require('mocha');
// require('jquery');

/*
only for autocomplete code 
 */

var Clock = require('Clock');


describe('Clock', () => {
    it('should exist', () => {
        expect(Clock).toExist();
    });

    describe('render', () => {
        it('should render clock to output', () => {
            var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
            var $el = $(ReactDOM.findDOMNode(clock));
            var actualText = $el.find('.clock-text').text();

            expect(actualText).toBe('01:02');

        });
    });



    describe('formatSeconds', () => {
        it('should format seconds', () => {
            var clock = TestUtils.renderIntoDocument(<Clock/>);
            var seconds = 615;
            var expected = '10:15';
            var actual = clock.formatSeconds(seconds);

            expect(actual).toBe(expected);
        });
    });

    describe('formatSeconds', () => {
        it('should format seconds when min/sec are less than 10', () => {
            var clock = TestUtils.renderIntoDocument(<Clock/>);
            var seconds = 61;
            var expected = '01:01';
            var actual = clock.formatSeconds(seconds);

            expect(actual).toBe(expected);
        });
    });

});