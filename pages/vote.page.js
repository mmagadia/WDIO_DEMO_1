class VotePage {
  get voteTitle() {
    return $('body > div.container-fluid > div:nth-child(6) > div > h4');
  }
  // Radio Buttons
  get voteItemRadio1() {
    return $('#heroMovieRadio1');
  }
  get voteItemRadio2() {
    return $('#heroMovieRadio2');
  }
  get voteItemRadio3() {
    return $('#heroMovieRadio3');
  }
  get voteItemRadio4() {
    return $('#heroMovieRadio4');
  }
  get voteItemRadio5() {
    return $('#heroMovieRadio5');
  }
  get submitButton() {
    return $('#vote-form > button');
  }
  // Labels
  get voteItemLabel1() {
    return $('#vote-form > div:nth-child(1) > label');
  }
  get voteItemLabel2() {
    return $('#vote-form > div:nth-child(2) > label');
  }
  get voteItemLabel3() {
    return $('#vote-form > div:nth-child(3) > label');
  }
  get voteItemLabel4() {
    return $('#vote-form > div:nth-child(4) > label');
  }
  get voteItemLabel5() {
    return $('#vote-form > div:nth-child(5) > label');
  }

  // Movie Title Grid / Number of votes
  get movieTitleText() {
    return $('body > div.container-fluid > div:nth-child(6) > div > table > thead > tr > th:nth-child(1)');
  }
  get votesTitleText() {
    return $('body > div.container-fluid > div:nth-child(6) > div > table > thead > tr > th:nth-child(2)');
  }
  get voteItemText1() {
    return $('#movieName1');
  }
  get voteItemVal1() {
    return $('#movieVotes1');
  }
  get voteItemText2() {
    return $('#movieName2');
  }
  get voteItemVal2() {
    return $('#movieVotes2');
  }
  get voteItemText3() {
    return $('#movieName3');
  }
  get voteItemVal3() {
    return $('#movieVotes3');
  }
  get voteItemText4() {
    return $('#movieName4');
  }
  get voteItemVal4() {
    return $('#movieVotes4');
  }
  get voteItemText5() {
    return $('#movieName5');
  }
  get voteItemVal5() {
    return $('#movieVotes5');
  }
  get thanksAlert() {
    return $('#vote-alert');
  }
}

module.exports = new VotePage();
