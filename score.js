var balls_A = 0;
var overs_A = 0;
var runs_A = 0;
var wickets_A = 0;
function f1() {
  runs_A = runs_A + 1;
  balls_A = balls_A + 1;

  //   for updating balls
  document.getElementById("teamA_balls").innerHTML = balls_A;
  //   for updating runs
  document.getElementById("teamA_runs").innerHTML = runs_A;
  //   for updating overs according to 6 balls
  if (balls_A % 6 == 0) {
    overs_A = overs_A + 1;
    document.getElementById("teamA_overs").innerHTML = overs_A;
  }
}
function f2() {
  balls_A = balls_A + 1;
  runs_A = runs_A + 4;

  //   for updating balls
  document.getElementById("teamA_balls").innerHTML = balls_A;
  //   for updating runs;
  document.getElementById("teamA_runs").innerHTML = runs_A;
  //   for updating overs according to 6 balls
  if (balls_A % 6 == 0) {
    overs_A = overs_A + 1;
    document.getElementById("teamA_overs").innerHTML = overs_A;
  }
}
function f3() {
  balls_A = balls_A + 1;
  runs_A = runs_A + 6;

  //   for updating balls
  document.getElementById("teamA_balls").innerHTML = balls_A;
  //   for updating runs;
  document.getElementById("teamA_runs").innerHTML = runs_A;
  //   for updating overs according to 6 balls
  if (balls_A % 6 == 0) {
    overs_A = overs_A + 1;
    document.getElementById("teamA_overs").innerHTML = overs_A;
  }
}
function f4() {
  balls_A = balls_A + 1;
  wickets_A = wickets_A + 1;

  //   for updating balls
  document.getElementById("teamA_balls").innerHTML = balls_A;
  //   for updating wickets
  document.getElementById("teamA_wickets").innerHTML = wickets_A;

  if (balls_A % 6 == 0) {
    overs_A = overs_A + 1;
    document.getElementById("teamA_overs").innerHTML = overs_A;
  }
}

// FOR TEAM B
var balls_B = 0;
var overs_B = 0;
var runs_B = 0;
var wickets_B = 0;

function f5() {
  runs_B = runs_B + 1;
  balls_B = balls_B + 1;

  // for updating balls
  document.getElementById("teamB_balls").innerHTML = balls_B;
  // for updating runs
  document.getElementById("teamB_runs").innerHTML = runs_B;
  // for updating overs according to 6 balls
  if (balls_B % 6 == 0) {
    overs_B = overs_B + 1;
    document.getElementById("teamB_overs").innerHTML = overs_B;
  }
}

function f6() {
  balls_B = balls_B + 1;
  runs_B = runs_B + 4;

  // for updating balls
  document.getElementById("teamB_balls").innerHTML = balls_B;
  // for updating runs
  document.getElementById("teamB_runs").innerHTML = runs_B;
  // for updating overs according to 6 balls
  if (balls_B % 6 == 0) {
    overs_B = overs_B + 1;
    document.getElementById("teamB_overs").innerHTML = overs_B;
  }
}

function f7() {
  balls_B = balls_B + 1;
  runs_B = runs_B + 6;

  // for updating balls
  document.getElementById("teamB_balls").innerHTML = balls_B;
  // for updating runs
  document.getElementById("teamB_runs").innerHTML = runs_B;
  // for updating overs according to 6 balls
  if (balls_B % 6 == 0) {
    overs_B = overs_B + 1;
    document.getElementById("teamB_overs").innerHTML = overs_B;
  }
}

function f8() {
  balls_B = balls_B + 1;
  wickets_B = wickets_B + 1;

  // for updating balls
  document.getElementById("teamB_balls").innerHTML = balls_B;
  // for updating wickets
  document.getElementById("teamB_wickets").innerHTML = wickets_B;

  if (balls_B % 6 == 0) {
    overs_B = overs_B + 1;
    document.getElementById("teamB_overs").innerHTML = overs_B;
  }
}
