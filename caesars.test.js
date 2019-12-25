const assert = require('assert');
const { caesarize } = require('./caesarsCipher');

describe('caesarsCipher', (strToCaesarize, shiftNumber) => {
  it('Characters should move followed by ShiftNumber', () => {
    assert.equal(caesarize('aBcD', 3), 'dEfG');
    assert.equal(caesarize('aBcD', -3), 'xYzA');
    assert.equal(caesarize('heLLo worLd!', 0), 'heLLo worLd!');
    assert.equal(caesarize('heLLo worLd!', 1), 'ifMMp xpsMe!');
    assert.equal(caesarize(' ', 5), ' ');
    assert.equal(caesarize('mnOpQr', 26), 'mnOpQr');
    assert.equal(caesarize('#@&&^F*(#', 6), '#@&&^L*(#');
  });
});
