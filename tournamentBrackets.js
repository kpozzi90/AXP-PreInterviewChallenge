const tournament = (n, t) => {
  let num = 2 ** n
  let teams = [];
  for (let i = 1; i <= num; i++) {
    if (i !== t) {
      teams.push(i);
    };
  };
  teams.push(t)
  let output = [];
  for (let i = 0; i < teams.length; i+=2) {
    let teamOne = teams[i];
    let teamTwo = teams[i+1];
    output.push(teamOne.toString() + '-' + teamTwo.toString());
  }
  return output.join(', ')
}