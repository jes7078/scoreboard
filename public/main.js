const main = () => {
  console.log('hello world')
}

let teamOneScore = 10
let teamTwoScore = 10

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

const updateTeam1Scoreadd = () => {
  console.log('calculating team score 1')
  console.log('this is the team1 score: ' + teamOneScore)
  teamOneScore = teamOneScore + 1
  console.log('this is the new team1 score: ' + teamOneScore)
  document.querySelector('.team-1-score').textContent = teamOneScore
}

const updateTeam1ScoreMinus = () => {
  console.log('calculating team score 1')
  console.log('this is the team1 score: ' + teamOneScore)
  teamOneScore = teamOneScore - 1
  console.log('this is the new team1 score: ' + teamOneScore)
  document.querySelector('.team-1-score').textContent = teamOneScore
}

const updateTeam2ScoreAdd = () => {
  console.log('calculating team score 2')
  console.log('this is the team2 score: ' + teamTwoScore)
  teamTwoScore = teamTwoScore + 1
  console.log('this is the new team2 score: ' + teamTwoScore)
  document.querySelector('.team-2-score').textContent = teamTwoScore
}

const updateTeam2ScoreMinus = () => {
  console.log('calculating team score 2')
  console.log('this is the team2 score: ' + teamTwoScore)
  teamTwoScore = teamTwoScore - 1
  console.log('this is the new team2 score: ' + teamTwoScore)
  document.querySelector('.team-2-score').textContent = teamTwoScore
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
  .addEventListener('click', updateTeam1Scoreadd)
document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', updateTeam1ScoreMinus)
document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', updateTeam2ScoreAdd)
document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', updateTeam2ScoreMinus)
