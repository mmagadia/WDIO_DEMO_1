const assert = require('assert');
const LoginPage = require('../pages/login.page');
const RosterPage = require('../pages/roster.page');

describe('Test Suite: Dynamic Roster Item', () => {
  it('should create single item', () => {
    browser.url('');

    LoginPage.login('1@2.com', 'password');

    RosterPage.addHero('Sponge Bob');
    // RosterPage.addHeroField.setValue('Sponge Bob');
    // RosterPage.submitButton.click();
    assert.strictEqual(RosterPage.rosterItems[5].getText(), 'Sponge Bob', 'Hero text is not the same');
  });
  it.skip('should have default list of heroes', () => {
    let heroes = ['Wolverine', 'Iron Man', 'Deadpool', 'Thor', 'Spider-Man'];
    browser.url('');

    LoginPage.login('1@2.com', 'password');

    for (let i = 0; i < heroes.length; i++) {
      assert.strictEqual(RosterPage.rosterItems[i].getText(), heroes[i], `Actual text is ${heroes[i]}`);
    }
  });
  it('should create multiple items', () => {
    let superHeroes = ['hero1', 'hero2', 'hero3', 'hero4', 'hero5'];

    browser.url('');

    LoginPage.login('1@2.com', 'password');

    for (let i = 0; i < superHeroes.length; i++) {
      RosterPage.addHero(superHeroes[i]);
      //   RosterPage.addHeroField.setValue(superHeroes[i]);
      //   RosterPage.submitButton.click();
      browser.pause(3000);
    }

    for (let i = 0; i < superHeroes.length; i++) {
      assert.strictEqual(
        RosterPage.rosterItems[i + 5].getText(),
        superHeroes[i],
        `Actual text is ${superHeroes[i + 5]}`
      );
    }
  });
});
