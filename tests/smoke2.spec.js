const assert = require('assert');
const LoginPage = require('../pages/login.page');
const VotePage = require('../pages/vote.page');

describe('Test Suite: Smoke Test 2', () => {
  it('should verify static element are present for Vote section', () => {
    browser.url('');

    // verify the Login
    assert.strictEqual(LoginPage.headingText.isDisplayed(), true, 'LoginPage.headingText');
    assert.strictEqual(LoginPage.emailLabel.isDisplayed(), true, 'LoginPage.emailLabel');
    assert.strictEqual(LoginPage.emailField.isDisplayed(), true, 'LoginPage.emailField');
    assert.strictEqual(LoginPage.passwordLabel.isDisplayed(), true, 'LoginPage.passwordLabel');
    assert.strictEqual(LoginPage.passwordField.isDisplayed(), true, 'LoginPage.passwordField');
    assert.strictEqual(LoginPage.rememberLoginCheckbox.isDisplayed(), true, 'LoginPage.rememberLoginCheckbox');
    assert.strictEqual(LoginPage.rememberLoginLabel.isDisplayed(), true, 'LoginPage.rememberLoginLabel');
    assert.strictEqual(LoginPage.submitButton.isDisplayed(), true, 'LoginPage.submitButton');

    // Login
    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();

    // verify the Vote
    assert.strictEqual(VotePage.voteTitle.isDisplayed(), true, 'VotePage.voteTitle');
    assert.strictEqual(VotePage.voteItemRadio1.isDisplayed(), true, 'VotePage.voteItemRadio1');
    assert.strictEqual(VotePage.voteItemRadio2.isDisplayed(), true, 'VotePage.voteItemRadio2');
    assert.strictEqual(VotePage.voteItemRadio3.isDisplayed(), true, 'VotePage.voteItemRadio3');
    assert.strictEqual(VotePage.voteItemRadio4.isDisplayed(), true, 'VotePage.voteItemRadio4');
    assert.strictEqual(VotePage.voteItemRadio5.isDisplayed(), true, 'VotePage.voteItemRadio5');
    assert.strictEqual(VotePage.voteItemLabel1.isDisplayed(), true, 'VotePage.voteItemLabel1');
    assert.strictEqual(VotePage.voteItemLabel2.isDisplayed(), true, 'VotePage.voteItemLabel2');
    assert.strictEqual(VotePage.voteItemLabel3.isDisplayed(), true, 'VotePage.voteItemLabel3');
    assert.strictEqual(VotePage.voteItemLabel4.isDisplayed(), true, 'VotePage.voteItemLabel4');
    assert.strictEqual(VotePage.voteItemLabel5.isDisplayed(), true, 'VotePage.voteItemLabel5');
    assert.strictEqual(VotePage.submitButton.isDisplayed(), true, 'VotePage.submitButton');
    assert.strictEqual(VotePage.movieTitleText.isDisplayed(), true, 'VotePage.movieTitleText');
    assert.strictEqual(VotePage.votesTitleText.isDisplayed(), true, 'VotePage.votesTitleText');
    assert.strictEqual(VotePage.voteItemText1.isDisplayed(), true, 'VotePage.voteItemText1');
    assert.strictEqual(VotePage.voteItemVal1.isDisplayed(), true, 'VotePage.voteItemVal1');
    assert.strictEqual(VotePage.voteItemText2.isDisplayed(), true, 'VotePage.voteItemText2');
    assert.strictEqual(VotePage.voteItemVal2.isDisplayed(), true, 'VotePage.voteItemVal2');
    assert.strictEqual(VotePage.voteItemText3.isDisplayed(), true, 'VotePage.voteItemText3');
    assert.strictEqual(VotePage.voteItemVal3.isDisplayed(), true, 'VotePage.voteItemVal3');
    assert.strictEqual(VotePage.voteItemText4.isDisplayed(), true, 'VotePage.voteItemText4');
    assert.strictEqual(VotePage.voteItemVal4.isDisplayed(), true, 'VotePage.voteItemVal4');
    assert.strictEqual(VotePage.voteItemText5.isDisplayed(), true, 'VotePage.voteItemText5');
    assert.strictEqual(VotePage.voteItemVal5.isDisplayed(), true, 'VotePage.voteItemVal5');
  });
});
