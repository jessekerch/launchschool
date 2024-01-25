let receivers = ['Justin', 'KJ'];

function pass(players) {
  players.forEach(function(player) {
    console.log(`${this.name} passes to ${player}`);
  });
}

let kirk = {
  name: 'Kirk',
  play: pass,
}

kirk.play(receivers);

receivers.push('Jordan');
kirk.play(receivers);



