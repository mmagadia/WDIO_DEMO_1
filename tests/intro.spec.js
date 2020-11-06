const assert = require('assert');
const IntroPage = require('../pages/intro.page');
const LoginPage = require('../pages/login.page');

describe('Test Suite: Intro', () => {
  it('should display correct title', () => {
    browser.url('');

    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();

    assert.strictEqual(IntroPage.titleText.getText(), 'Superhero Roster', 'Text is not the same');
  });

  it('should display correct image', () => {
    browser.url('');

    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();

    console.log('SRC: ' + IntroPage.mainImage.getAttribute('src'));
    // SRC: http://localhost:8080/images/superhero.png
    // src failed using relative path: /images/superhero.png because it's getting the full path.

    assert.strictEqual(
      IntroPage.mainImage.getAttribute('src'),
      'http://localhost:8080/images/superhero.png',
      'Src is not the same'
    );

    assert.strictEqual(IntroPage.mainImage.getAttribute('alt'), 'Superhero Image', 'Alt is not the same');
  });
});
