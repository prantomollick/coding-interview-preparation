const HOME_TEAM_WON = 1;

function updateScores(team, points, scores) {
  if (!(team in scores)) {
    scores[team] = 0;
  }

  scores[team] += points;
}

function tournamentWinner(competitions, results) {
  let bestTeam = "";
  const scores = { "": 0 };

  for (let idx = 0; idx < competitions.length; idx++) {
    const result = results[idx];
    const [homeTeam, awayTeam] = competitions[idx];
    let winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;

    updateScores(winningTeam, 3, scores);

    if (scores[winningTeam] > scores[bestTeam]) {
      bestTeam = winningTeam;
    }
  }
  return bestTeam;
}

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;
