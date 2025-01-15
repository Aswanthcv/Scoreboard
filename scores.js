let team1Score = 0;
let team2Score = 0;

function updateScore(team) {
    if (team === 1) {
        team1Score++;
        document.getElementById('score1').textContent = team1Score;
    } else if (team === 2) {
        team2Score++;
        document.getElementById('score2').textContent = team2Score;
    }
    updateLeader();
}

function updateLeader() {
    const leaderText = document.getElementById('leader');
    if (team1Score > team2Score) {
        leaderText.textContent = "Team 1 Leads now";
    } else if (team2Score > team1Score) {
        leaderText.textContent = "Team 2 Leads now";
    } else {
        leaderText.textContent = "It's a tie!";
    }
}

function stopGame() {
    alert(`Game Over! Final Scores:\nTeam 1: ${team1Score}\nTeam 2: ${team2Score}`);
}
function resetGame() {
    team1Score = 0;
    team2Score = 0;
    document.getElementById('score1').textContent = team1Score;
    document.getElementById('score2').textContent = team2Score;
    updateLeader();
}