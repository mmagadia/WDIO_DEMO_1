const assert = require('assert');
const LoginPage = require('../pages/login.page');
const HeaderPage = require('../pages/header.page');

describe('Test Suite: Header', () => {
  it('should redirect to new site', () => {
    browser.url('');

    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();

    HeaderPage.linkLink.click();

    assert.strictEqual(browser.getUrl(), 'https://glitchitsystem.com/');
  });

  it('should open wolverine modal', () => {
    browser.url('');

    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();

    HeaderPage.heroFactsLink.click();

    HeaderPage.wolverineOption.click();
    browser.pause(2000);

    assert.strictEqual(HeaderPage.wolverineModalWindow.isDisplayed(), true, 'Modal is not displayed');
    assert.strictEqual(HeaderPage.wolverineModalTitleText.getText(), 'Wolverine Fact', 'Title is not the same');
    assert.strictEqual(
      HeaderPage.wolverineModalContentText.getText(),
      'Wolverine made his first comic book appearance in 1974.',
      'Content is not the same'
    );
  });

  it('should close wolverine modal', () => {
    browser.url('');

    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();

    HeaderPage.heroFactsLink.click();

    HeaderPage.wolverineOption.click();
    browser.pause(2000);

    assert.strictEqual(HeaderPage.wolverineModalWindow.isDisplayed(), true, 'Modal is not displayed');

    HeaderPage.wolverineModalCloseButton.click();
    browser.pause(2000);

    assert.strictEqual(HeaderPage.wolverineModalWindow.isDisplayed(), false, 'Modal is still displayed');
  });

  it('should open spiderman modal', () => {
    browser.url('');

    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();

    HeaderPage.heroFactsLink.click();

    HeaderPage.spidermanOption.click();
    browser.pause(2000);

    assert.strictEqual(HeaderPage.spidermanModalWindow.isDisplayed(), true, 'Modal is not displayed');

    assert.strictEqual(HeaderPage.spidermanModalTitleText.getText(), 'Spider-Man Fact', 'Title is not the same');

    assert.strictEqual(
      HeaderPage.spidermanModalContentText.getText(),
      'Spider-man was created by Stan Lee and Steve Ditko and first appeared in 1962.',
      'Content is not the same'
    );
  });

  it('should close spiderman modal', () => {
    browser.url('');

    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();

    HeaderPage.heroFactsLink.click();
    HeaderPage.spidermanOption.click();
    browser.pause(2000);

    assert.strictEqual(HeaderPage.spidermanModalWindow.isDisplayed(), true, 'Modal is not displayed');

    HeaderPage.spidermanModalCloseButton.click();
    browser.pause(2000);

    assert.strictEqual(HeaderPage.spidermanModalWindow.isDisplayed(), false, 'Modal is still displayed');
  });

  it('should search for wolverine', () => {
    browser.url('');

    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();

    HeaderPage.searchField.setValue('wolverine');

    HeaderPage.searchButton.click();

    assert.strictEqual(browser.isAlertOpen(), true, 'Alert is not open');
    assert.strictEqual(browser.getAlertText(), 'Wolverine is awesome!', 'Alert text is not equal');
    browser.acceptAlert();
    assert.strictEqual(browser.isAlertOpen(), false, 'Alert is still not open');
  });

  it('should error because you did not search for wolverine', () => {
    browser.url('');

    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();

    HeaderPage.searchField.setValue('something');

    HeaderPage.searchButton.click();

    assert.strictEqual(browser.isAlertOpen(), true, 'Alert is not open');
    assert.strictEqual(
      browser.getAlertText(),
      'Your search for something returned 0 reults. Try something else.',
      'Alert text is not equal'
    );
  });

  it('should close the alert', () => {
    browser.url('');

    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();

    HeaderPage.searchField.setValue('something');

    HeaderPage.searchButton.click();

    assert.strictEqual(browser.isAlertOpen(), true, 'Alert is not open');

    browser.acceptAlert();

    assert.strictEqual(browser.isAlertOpen(), false, 'Alert is still open');
  });
});
