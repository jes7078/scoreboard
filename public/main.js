const main = () => {
  console.log('hello world')
}

let teamOneScore = 0
let teamTwoScore = 0
let teamOneScoreMax = 0
let teamTwoScoreMax = 0
let teamOneScoreMin = 0
let teamTwoScoreMin = 0

const teamOneScoreMaxf = () => {
  console.log('initiated max score')
  if (teamOneScore > teamOneScoreMax) {
    teamOneScoreMax = teamOneScore
    document.querySelector(
      '.output-message-team-1-max'
    ).textContent = teamOneScoreMax
  }
}

const teamOneScoreMinf = () => {
  console.log('initiated max score')
  if (teamOneScore < teamOneScoreMin) {
    teamOneScoreMin = teamOneScore
    document.querySelector(
      '.output-message-team-1-min'
    ).textContent = teamOneScoreMin
  }
}

const teamTwoScoreMaxf = () => {
  console.log('initiated max score2')
  if (teamTwoScore > teamTwoScoreMax) {
    teamTwoScoreMax = teamTwoScore
    document.querySelector(
      '.output-message-team-2-max'
    ).textContent = teamTwoScoreMax
  }
}

const teamTwoScoreMinf = () => {
  console.log('initiated max score')
  if (teamTwoScore < teamTwoScoreMin) {
    teamTwoScoreMin = teamTwoScore
    document.querySelector(
      '.output-message-team-2-min'
    ).textContent = teamTwoScoreMin
  }
}

const updateTeamName1 = () => {
  console.log('calculating team name 1')
  const teamOne = document.querySelector('.team-1-input').value
  console.log('this is the team name: ' + teamOne)
  document.querySelector('.team-1-name').textContent = teamOne
}

const updateTeamName2 = () => {
  console.log('calculating team name 2')
  const teamTwo = document.querySelector('.team-2-input').value
  console.log('this is the team two name: ' + teamTwo)
  document.querySelector('.team-2-name').textContent = teamTwo
}

const updateTeam1ScoreAdd = () => {
  if (teamOneScore < 20) {
    teamOneScore = teamOneScore + 1
    document.querySelector('.team-1-score').textContent = teamOneScore
  } else if ((teamOneScore = 20)) {
    teamOneScore = teamOneScore + 1
    document.querySelector('.team-1-score').textContent = teamOneScore
    disableButtons()
    document.querySelector('.output-message').textContent = 'Team 1 Wins!!!'
  }
}

const updateTeam1ScoreMinus = () => {
  if (teamOneScore > 0) {
    teamOneScore = teamOneScore - 1
  } else {
    teamOneScore = 0
  }
  document.querySelector('.team-1-score').textContent = teamOneScore
}

const updateTeam2ScoreAdd = () => {
  if (teamTwoScore < 20) {
    teamTwoScore = teamTwoScore + 1
    document.querySelector('.team-2-score').textContent = teamTwoScore
  } else if ((teamTwoScore = 20)) {
    teamTwoScore = teamTwoScore + 1
    document.querySelector('.team-2-score').textContent = teamTwoScore
    disableButtons()
    document.querySelector('.output-message').textContent = 'Team 2 Wins!!!'
  }
}

const updateTeam2ScoreMinus = () => {
  if (teamTwoScore > 0) {
    teamTwoScore = teamTwoScore - 1
  } else {
    teamTwoScore = 0
  }
  document.querySelector('.team-2-score').textContent = teamTwoScore
}

const disableButtons = () => {
  document.querySelector('.team-1-add-1-button').disabled = true
  document.querySelector('.team-2-add-1-button').disabled = true
  document.querySelector('.team-1-subtract-1-button').disabled = true
  document.querySelector('.team-2-subtract-1-button').disabled = true
  document.querySelector('.update-team-1-name').disabled = true
  document.querySelector('.update-team-2-name').disabled = true
}

function refreshPage() {
  window.location.reload()
}

document.addEventListener('DOMContentLoaded', main)
document
  .querySelector('.update-team-1-name')
  .addEventListener('click', updateTeamName1)
document
  .querySelector('.update-team-2-name')
  .addEventListener('click', updateTeamName2)
document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', updateTeam1ScoreAdd)
document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', teamOneScoreMaxf)
document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', updateTeam1ScoreMinus)
document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', teamOneScoreMinf)
document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', updateTeam2ScoreAdd)
document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', teamTwoScoreMaxf)
document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', updateTeam2ScoreMinus)
document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', teamTwoScoreMinf)
