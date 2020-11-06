const assert = require('assert');
const LoginPage = require('../pages/login.page');
const HeaderPage = require('../pages/header.page');

describe('Test Suite: User Login', () => {
  it('should display error when password is missing', () => {
    browser.url('');
    LoginPage.emailField.setValue('test@test.com');
    LoginPage.submitButton.click();

    assert.strictEqual(browser.isAlertOpen(), true, 'Alert is not open');
    assert.strictEqual(browser.getAlertText(), 'Please enter an email and password', 'Alert text is not equal');

    browser.acceptAlert();

    assert.strictEqual(browser.isAlertOpen(), false, 'Alert is still open');
  });

  it('should display error when email is missing', () => {
    browser.url('');

    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();

    assert.strictEqual(browser.isAlertOpen(), true, 'Alert is not open');
    assert.strictEqual(browser.getAlertText(), 'Please enter an email and password', 'Alert text is not equal');

    browser.acceptAlert();

    assert.strictEqual(browser.isAlertOpen(), false, 'Alert is still open');
  });

  it('should display error when email and password are missing', () => {
    browser.url('');

    LoginPage.submitButton.click();

    assert.strictEqual(browser.isAlertOpen(), true, 'Alert is not open');
    assert.strictEqual(browser.getAlertText(), 'Please enter an email and password', 'Alert text is not equal');

    browser.acceptAlert();

    assert.strictEqual(browser.isAlertOpen(), false, 'Alert is still open');
  });

  it('should display error when email is incorrect', () => {
    browser.url('');

    LoginPage.emailField.setValue('blah');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();

    assert.strictEqual(browser.isAlertOpen(), true, 'Alert is open');
    assert.strictEqual(browser.getAlertText(), 'Invalid email and password', 'Alert text is not equal');

    browser.acceptAlert();

    assert.strictEqual(browser.isAlertOpen(), false, 'Alert is still open');
  });

  it('should display error when password is incorrect', () => {
    browser.url('');

    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('blah');
    LoginPage.submitButton.click();

    assert.strictEqual(browser.isAlertOpen(), true, 'Alert is open');
    assert.strictEqual(browser.getAlertText(), 'Invalid email and password', 'Alert text is not equal');
    browser.acceptAlert();

    assert.strictEqual(browser.isAlertOpen(), false, 'Alert is still open');
  });

  it('should display error when password case is incorrect', () => {
    browser.url('');

    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('PASSWORD');
    LoginPage.submitButton.click();

    assert.strictEqual(browser.isAlertOpen(), true, 'Alert is not open');
    assert.strictEqual(browser.getAlertText(), 'Invalid email and password', 'Alert text is not equal');

    browser.acceptAlert();

    assert.strictEqual(browser.isAlertOpen(), false, 'Alert is stuill open');
  });

  it('should login with valid email and password', () => {
    browser.url('');

    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();

    assert.strictEqual(LoginPage.Overlay.isDisplayed(), false, 'Overlay is still displayed');
  });

  it('should remember login creds', () => {
    browser.url('');

    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.rememberLoginCheckbox.click();
    LoginPage.submitButton.click();

    assert.strictEqual(LoginPage.Overlay.isDisplayed(), false, 'Overlay is still displayed');

    HeaderPage.logoutLink.click();

    assert.strictEqual(LoginPage.Overlay.isDisplayed(), true, 'Overlay is still displayed');

    assert.strictEqual(LoginPage.emailField.getValue(), '1@2.com', 'Values are not the same');
    assert.strictEqual(LoginPage.passwordField.getValue(), 'password', 'Values are not the same');

    //if cannot get the value of password because it is encrypted or masked, try getValue().length
    assert.strictEqual(LoginPage.passwordField.getValue().length, 8, 'Password is too short');

    assert.strictEqual(LoginPage.rememberLoginCheckbox.isSelected(), true, 'Checkbox is not selected');

    LoginPage.submitButton.click();

    assert.strictEqual(LoginPage.Overlay.isDisplayed(), false, 'Overlay is still displayed');
  });

  it('should not remember login cred', () => {
    browser.url('');

    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();

    assert.strictEqual(LoginPage.Overlay.isDisplayed(), false, 'Overlay is still displayed');

    HeaderPage.logoutLink.click();

    assert.strictEqual(LoginPage.Overlay.isDisplayed(), true, 'Overlay is still displayed');

    assert.strictEqual(LoginPage.emailField.getValue(), '', 'values are not the same');
    assert.strictEqual(LoginPage.passwordField.getValue().length, 0, 'values are not the same');
    assert.strictEqual(LoginPage.rememberLoginCheckbox.isSelected(), false, 'Checkbox is still selected');
  });
});
