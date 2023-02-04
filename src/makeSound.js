import * as Tone from 'tone';

function playSound(sound) {
  const player = new Tone.Player(sound).toDestination();
  Tone.loaded().then(() => {
    player.start();
  });
}

export default playSound;