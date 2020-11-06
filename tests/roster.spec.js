const assert = require('assert');
const LoginPage = require('../pages/login.page');
const RosterPage = require('../pages/roster.page');

describe('Test Suite: Roster', () => {
  it('should have default values', () => {
    browser.url('');

    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();

    var instruction =
      'Imagine that you are tasked with building a team of Superheros to save the world. We have given you a few heroes to start with. Add as many heroes as you would like to round out your dream team.';

    var title = 'Build Your Superhero Roster:';
    assert.strictEqual(RosterPage.instructionText.getText(), instruction, 'Text is not the same');
    assert.strictEqual(RosterPage.listTitle.getText(), title, 'Title is not the same');
    assert.strictEqual(RosterPage.wolverineItem.getText(), 'Wolverine', 'Wolverine text not the same');
    assert.strictEqual(RosterPage.ironmanItem.getText(), 'Iron Man', 'Iron Man text not the same');
    assert.strictEqual(RosterPage.thorItem.getText(), 'Thor', 'Thor text not the same');
    assert.strictEqual(RosterPage.spidermanItem.getText(), 'Spider-Man', 'Spider-Man text not the same');
    assert.strictEqual(RosterPage.addHeroLabel.getText(), 'ADD A SUPERHERO', 'ADD A SUPERHERO Label is not the same');
    assert.strictEqual(RosterPage.addHeroField.getAttribute('placeholder'), 'Enter Hero', 'Placeholder not the same');
  });

  it('should add a superhero', () => {
    browser.url('');

    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();

    var newItem = 'New Superhero';

    RosterPage.addHeroField.setValue(newItem);

    RosterPage.submitButton.click();

    assert.strictEqual(RosterPage.newItem.getText(), newItem, 'New Superhero text is not the same');
  });
});
