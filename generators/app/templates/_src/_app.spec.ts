'use strict';

import * as chai from 'chai';
let expect = chai.expect;

import * as App from './app';

describe('basic', () => {
    it('map', () => {
        let result = [1, 2, 3].map(App.double);
        expect(result).to.deep.equal([2, 4, 6]);
    });

    it('filter', () => {
        let result = [1, 2, 3, 4].filter(App.isEven);
        expect(result).to.deep.equal([2,4]);
    });
});
