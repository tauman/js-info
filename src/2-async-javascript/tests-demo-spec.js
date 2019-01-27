'use strict';

const expect = require('chai').expect;

// TO RUN THESE TESTS:
// npm run test:demo

const SUCCESS = 'SUCCESS';
const ERROR = 'ERROR';
const RESOLVE = 'RESOLVE';
const REJECT = 'REJECT';
const RETURNS = 'RETURNS';
const THROWS = 'THROWS';

describe('Tests', function() {
    describe('Callback', function() {
        it('tests that callback fails', function(done) {
            succeed(false, (error, result) => {
                expect(error).to.be.an(ERROR);
                expect(result).to.be.undefined;
                done();
            });
        });

        it('tests that callback succeeds', function(done) {
            // this.slow(1500); // set a 'slow' test threshhold
            // this.timeout(5000);
            succeed(true, (error, result) => {
                expect(error).to.be.null;
                expect(result).to.deep.equal({ flag: SUCCESS });
                done();
            });
        });
    });

    describe('promise', function() {
        it('tests that promise rejects', function() {
            return resolve(false)
                .then(() => {
                    throw new Error('was not supposed to succeed');
                })
                .catch(error => {
                    expect(error.message).to.equal(REJECT);
                });
        });

        it('tests that promise resolves with test returning promise', function() {
            return resolve(true)
                .then(result => {
                    expect(result).to.exist;
                });
        });

        it('tests that promise resolves with test calling done()', function(done) {
            resolve(true)
                .then(result => {
                    expect(result).to.exist;
                    done();
                })
                .catch(done);
        });
    });

    describe('async function tested with async/await', function() {
        it('tests that async function throws', async function() {
            try {
                const result = await returns(false);
                expect(result).not.to.exist;
            } catch(error) {
                expect(error).to.exist;
                expect(error.message).to.deep.equal(THROWS);
            }
        });

        it('tests that async function returns', async function() {
            try {
                const result = await returns(true);
                expect(result).to.equal(RETURNS);
            } catch(error) {
                expect.fail('Function wrongly threw');
            }
        });
    });

    describe('promise tested with async/await', function() {
        it('tests that promise "rejects"', async function() {
            try {
                const result = await resolve(false);
                expect(result).not.to.exist;
            } catch(error) {
                expect(error).to.exist;
                expect(error.message).to.deep.equal(REJECT);
            }
        });

        it('tests that promise "resolves"', async function() {
            try {
                const result = await resolve(true);
                expect(result).to.equal(RESOLVE);
            } catch(error) {
                expect.fail('Function wrongly threw');
            }
        });
    });
});


function succeed(pass, callback) {
    if (pass) {
        return setTimeout(callback, 500, null, { flag: SUCCESS });
    }

    return setTimeout(callback, 500, new Error(ERROR));
}

function resolve(pass) {
    if (pass) {
        return Promise.resolve(RESOLVE);
    }

    return Promise.reject(new Error(REJECT));
}

async function returns(pass) {
    if (pass) {
        return RETURNS;
    }

    throw new Error(THROWS);
}
