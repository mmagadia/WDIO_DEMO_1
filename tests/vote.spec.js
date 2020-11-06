const assert = require('assert');
const LoginPage = require('../pages/login.page');
const VotePage = require('../pages/vote.page');

describe('Test Suite: Vote', () => {
  it('should increment vote', () => {
    browser.url('');

    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();

    let originalValue = Number(VotePage.voteItemVal1.getText());
    console.log('original value: ' + originalValue);
    console.log('new value: ' + (originalValue + 1));

    // Using the default x-men selection
    VotePage.submitButton.click();

    assert.strictEqual(Number(VotePage.voteItemVal1.getText()), originalValue + 1, 'Values are not the same');
    assert.strictEqual(VotePage.thanksAlert.isDisplayed(), true, 'Alert is not displayed');
    assert.strictEqual(VotePage.thanksAlert.getText(), 'Thanks for voting!', 'Text is ot the same');
  });
});
