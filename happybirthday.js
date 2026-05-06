const reveal = document.getElementById('reveal');
let popped = false;

function fireConfetti() {
  if (popped) return;
  popped = true;

  // grow the poppers
  document.querySelectorAll('.popper').forEach(p => {
    p.style.fontSize = '120px';
  });

  // left burst
  confetti({
    particleCount: 120,
    angle: 60,
    spread: 70,
    origin: { x: 0.1, y: 0.5 }
  });

  // right burst
  confetti({
    particleCount: 120,
    angle: 120,
    spread: 70,
    origin: { x: 0.9, y: 0.5 }
  });

  // show the congratulations text
  setTimeout(function() {
    reveal.classList.add('show');
  }, 400);

  // play music
  setTimeout(function() {
    playMusic();
  }, 800);
}

function playMusic() {
  const player = document.getElementById('yt-player');
  if (player) {
    player.src += "&autoplay=1";
  }
}

// 🎉 auto fire after 0.5 seconds
setTimeout(fireConfetti, 500);
