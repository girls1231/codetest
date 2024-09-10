const start_btn = document.getElementById('start');

function rotateImages() {
  document.querySelectorAll('img').forEach(img => {
    img.style.transform = 'rotateY(0deg)';
  })
  setTimeout(() => {
    document.querySelectorAll('img').forEach(img => {
      img.style.transform = 'rotateY(90deg)';
    });
  }, 3000);
}

start_btn.addEventListener('click', function() {
  rotateImages();
});

// 시계 관련 함수
function time_check() {
  let start = new Date();
  let h = start.getHours();
  let m = start.getMinutes();
  let s = start.getSeconds();
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);

  document.getElementById('clock').innerHTML = `${h}:${m}:${s}`;
  setTimeout(time_check, 1000);
}

function end_check() {
  let end = new Date();
  let h2 = end.getHours();
  let m2 = end.getMinutes();
  let s2 = end.getSeconds();
  h2 = checkTime(h2);
  m2 = checkTime(m2);
  s2 = checkTime(s2);

  document.getElementById('clock2').innerHTML = `${h2}:${m2}:${s2}`;
  setTimeout(end_check, 1000);
}

function checkTime(a) {
  if (a < 10) {
    a = '0' + a;
  }
  return a;
}
