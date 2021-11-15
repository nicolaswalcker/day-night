import anime from "animejs";
const switcher = document.querySelector(".js-switch");
const sun = document.querySelector(".js-sun");
const moon = document.querySelector(".js-moon");
const body = document.querySelector("body");
const audioMoon = document.querySelector(".js-audio--moon");
const audioSun = document.querySelector(".js-audio--sun");

const pauseMusic = (music) => {
  setTimeout(() => {
    music.pause();
  }, 1000);
};
const playMusic = (music) => {
  setTimeout(() => {
    music.play();
  }, 1500);
};

const randomPositionSun = () => {
  const randomX = Math.floor(Math.random() * 60) + 20;
  const randomY = Math.floor(Math.random() * 60) + 20;
  sun.style.left = `${randomX}%`;
  sun.style.top = `${randomY}%`;
};
const randomPositionMoon = () => {
  const randomX = Math.floor(Math.random() * 60) + 20;
  const randomY = Math.floor(Math.random() * 60) + 20;
  moon.style.left = `${randomX}%`;
  moon.style.top = `${randomY}%`;
};

window.addEventListener("load", () => {
  randomPositionSun();
  flyInAnim(sun);
  resetAnim(sun);
});

export let flyInAnimComplete = false; // prevent other animations from interrupting
export function flyInAnim(target) {
  flyInAnimComplete = false;
  anime({
    targets: target,
    translateX: [
      { value: -2000, duration: 0, delay: 0 },
      { value: 0, duration: 1000, delay: 0 },
    ],
    translateY: [
      { value: 2000, duration: 0, delay: 0 },
      { value: 0, duration: 1000, delay: 0 },
    ],
    scale: [
      { value: 4, duration: 100, delay: 0, easing: "easeOutExpo" },
      { value: 1, duration: 900 },
    ],
    easing: "easeOutElastic(1, .6)",
    loop: false,
    complete: () => {
      flyInAnimComplete = true;
    },
  });
}

export function flyOutAnim(target) {
  flyInAnimComplete = false;
  anime({
    targets: target,
    translateX: [
      // fly out
      { value: 1500, duration: 0, delay: 0 },
      { value: 200, duration: 1000, delay: 0 },
    ],
    translateY: [
      { value: 0, duration: 0, delay: 0 },
      { value: -800, duration: 1000, delay: 0 },
    ],
    scale: [{ value: 0, duration: 350, delay: 100, easing: "easeOutExpo" }],
    backgroundColor: "white",
    easing: "easeOutElastic(1, .6)",
    loop: false,
  });
}

// resets an objects transform to default to avoid animation bugs
export function resetAnim(target) {
  target.style.transform = "none";
}
export let musicActive = false
switcher.addEventListener("click", (e) => {
  musicActive = false;
  pauseMusic(audioMoon);
  pauseMusic(audioSun);
  if (body.classList.contains("t-dark")) {
    flyInAnim(sun);
    flyOutAnim(moon);
    sun.classList.add("is-active");
  } else {
    randomPositionSun();
    randomPositionMoon();
    moon.classList.add("is-active");
    flyOutAnim(sun);
    flyInAnim(moon);
  }
});

sun.addEventListener("click", (e) => {
  pauseMusic(audioMoon);
  if (musicActive) {
    pauseMusic(audioSun);
    musicActive = false;
  } else {
    playMusic(audioSun);
    pauseMusic(audioMoon);
    musicActive = true;
  }
});
moon.addEventListener("click", (e) => {
  pauseMusic(audioSun);
  if (musicActive) {
    pauseMusic(audioMoon); //
    musicActive = false;
  } else {
    playMusic(audioMoon);
    musicActive = true;
  }
});
