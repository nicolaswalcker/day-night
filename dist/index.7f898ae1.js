const spark = new mojs.Burst({
    left: 0,
    top: 0,
    count: 20,
    radius: {
        50: 120
    },
    rotate: {
        [90]: 0,
        easing: 'quad.out'
    },
    children: {
        opacity: {
            0: 1
        },
        shape: "line",
        stroke: "#FDE47F",
        scale: 1,
        strokeWidth: 3,
        radius: {
            25: 0
        },
        duration: 3000,
        easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
    }
});
const dots = new mojs.Burst({
    left: 0,
    top: 0,
    count: 20,
    radius: {
        40: 100
    },
    rotate: {
        [-90]: 0,
        easing: 'quad.out'
    },
    children: {
        shape: "line",
        stroke: "#FDE47F",
        scale: 1,
        strokeWidth: 3,
        radius: {
            20: 0
        },
        duration: 2800,
        easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
        opacity: {
            0: 1
        }
    }
});
const sun = new mojs.Burst({
    left: 0,
    top: 0,
    count: 1,
    radius: 0,
    children: {
        shape: "circle",
        fill: "#FDE47F",
        scale: 1,
        strokeWidth: 3,
        radius: {
            0: 80
        },
        duration: 1000,
        easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
        opacity: {
            0: 1
        }
    }
}).then({
    children: {
        radius: 0,
        duration: 500,
        opacity: 0
    }
});
document.addEventListener("click", function(e) {
    spark.tune({
        x: e.pageX,
        y: e.pageY
    }).replay();
    dots.tune({
        x: e.pageX,
        y: e.pageY
    }).replay();
    sun.tune({
        x: e.pageX,
        y: e.pageY
    }).replay();
});

//# sourceMappingURL=index.7f898ae1.js.map
