const sun = document.querySelector(".js-sun");
const sortNumbers = [
    70,
    40,
    50,
    30,
    60,
    20,
    10,
    -10,
    -20,
    -30,
    -40,
    -50,
    -60,
    -70
];
const randomNumber = Math.floor(Math.random() * sortNumbers.length);
window.addEventListener("load", ()=>{
    anime({
        targets: sun,
        translateX: sortNumbers[randomNumber],
        easing: "easeInOutQuad",
        duration: 2000
    });
}); /* sun.addEventListener("click", () => {
  anime({
    targets: sun,
    translateY: randomNumber,
    duration: 300,
    loop: true,
    direction: "alternate",
    easing: "easeInCubic",
    scaleX: {
      value: 1.05,
      duration: 150,
      delay: 268,
    },
  });
}); */ 

//# sourceMappingURL=index.14f29ba6.js.map
