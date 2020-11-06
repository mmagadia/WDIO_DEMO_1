const assert = require('assert');
const LoginPage = require('../pages/login.page');
const HeaderPage = require('../pages/header.page');
const IntroPage = require('../pages/intro.page');
const RosterPage = require('../pages/roster.page');

describe('Test Suite: Smoke Test 1', () => {
  it('should verify static element are present', () => {
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

    // verify the Header
    assert.strictEqual(HeaderPage.logoutLink.isDisplayed(), true, 'HeaderPage.logoutLink');
    assert.strictEqual(HeaderPage.linkLink.isDisplayed(), true, 'HeaderPage.linkLink');
    assert.strictEqual(HeaderPage.searchField.isDisplayed(), true, 'HeaderPage.searchField');
    assert.strictEqual(HeaderPage.searchButton.isDisplayed(), true, 'HeaderPage.searchButton');
    assert.strictEqual(HeaderPage.heroFactsLink.isDisplayed(), true, 'HeaderPage.heroFactsLink');
    HeaderPage.heroFactsLink.click();

    assert.strictEqual(HeaderPage.wolverineOption.isDisplayed(), true, 'HeaderPage.wolverineOption');
    assert.strictEqual(HeaderPage.spidermanOption.isDisplayed(), true, 'HeaderPage.spidermanOption');

    // verify the Intro
    assert.strictEqual(IntroPage.titleText.isDisplayed(), true, 'IntroPage.titleText');
    assert.strictEqual(IntroPage.mainImage.isDisplayed(), true, 'IntroPage.mainImage');

    // verify the Roster
    assert.strictEqual(RosterPage.instructionText.isDisplayed(), true, 'RosterPage.instructionText');
    assert.strictEqual(RosterPage.listTitle.isDisplayed(), true, 'RosterPage.listTitle');
    assert.strictEqual(RosterPage.wolverineItem.isDisplayed(), true, 'RosterPage.wolverineItem');
    assert.strictEqual(RosterPage.ironmanItem.isDisplayed(), true, 'RosterPage.ironmanItem');
    assert.strictEqual(RosterPage.deadpoolItem.isDisplayed(), true, 'RosterPage.deadpoolItem');
    assert.strictEqual(RosterPage.thorItem.isDisplayed(), true, 'RosterPage.thorItem');
    assert.strictEqual(RosterPage.spidermanItem.isDisplayed(), true, 'RosterPage.spidermanItem');
    assert.strictEqual(RosterPage.addHeroLabel.isDisplayed(), true, 'RosterPage.addHeroLabel');
    assert.strictEqual(RosterPage.addHeroField.isDisplayed(), true, 'RosterPage.addHeroField');
    assert.strictEqual(RosterPage.submitButton.isDisplayed(), true, 'RosterPage.submitButton');
  });
});
