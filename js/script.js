let current = 0;
const images = document.querySelectorAll('.gallery img');
const title = document.getElementById('main-title');

function startCountdown() {
  document.getElementById('main-title').style.display = 'none';
  document.querySelector('.start-btn').style.display = 'none';
  document.getElementById('countdown-box').style.display = 'block';
  document.getElementById('countdown-message').style.display = 'block'; // 👈 show during countdown


  const music = document.getElementById('bg-music');
  if (music) music.play();

  let counter = 10;
  const interval = setInterval(() => {
    document.getElementById('countdown-box').innerText = counter;
    counter--;
    if (counter < 0) {
      clearInterval(interval);
      document.getElementById('countdown-box').style.display = 'none';
      document.getElementById('countdown-message').style.display = 'none'; // 👈 hide after countdown

      startShow();
    }
  }, 1000);
}

function startShow() {
  const title = document.getElementById('main-title');
  title.innerHTML = "🎉🎂🥳 Happy Birthday🥳 to My Beautiful Princess 👸 Sum Did 💖🥳";
  title.style.display = 'block'; // 👈 Show the title again after countdown

  document.getElementById('gallery').style.display = 'block';
  document.querySelector('.next-btn').style.display = 'inline-block';
  showNextImage();
}


function showNextImage() {
  if (current < images.length) {
    if (current > 0) images[current - 1].classList.add('fly-away');
    setTimeout(() => {
      if (current > 0) images[current - 1].style.display = 'none';
      images[current].style.display = 'inline-block';
      current++;
    }, 1000);
  } else {
    if (current > 0) images[current - 1].style.display = 'none';
    document.getElementById('gallery').style.display = 'none';
    document.querySelector('.next-btn').style.display = 'none';
    document.getElementById('message').style.display = 'block';
    document.querySelector('.special-btn').style.display = 'inline-block';
  }
}

function showShayari() {
  document.querySelector('.special-btn').style.display = 'none';
  document.getElementById('shayari').style.display = 'block';
}

function createParticles() {
  const canvas = document.getElementById('canvas');
  for (let i = 0; i < 50; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.innerText = '❤';
    p.style.left = Math.random() * 100 + 'vw';
    p.style.fontSize = 20 + Math.random() * 20 + 'px';
    p.style.animationDuration = 4 + Math.random() * 6 + 's';
    p.style.setProperty('--dx', (Math.random() * 200 - 100) + 'px');
    canvas.appendChild(p);
    setTimeout(() => p.remove(), 10000);
  }
}


window.onload = () => {
  createParticles();
  setInterval(createParticles, 5000);
};
