const image = document.querySelector("#click");
const point = document.querySelector("#points");
const pointUpgrades = document.querySelector("#pointUpgrade");
const secondUpgrade = document.querySelector("#secondUpgrade");
const pointPerClickText = document.querySelector("#pointsPerClick");
const clicksPerSecondText = document.querySelector("#clicksPerSecond");
const upgradeCostText = document.querySelector("#upgradecost");
const upgradeCostBar = document.querySelector("#upgradeCostBar");
const autoClickerImage = document.querySelector("#click2");

let pointUpgradeCost = 20;
let pointsPerClick = 1;
let points = 0;
let clicksPerSecond = 0;
let clicksPerSecondCost = 16;

function updateUpgradeCost() {
    upgradeCostText.textContent = pointUpgradeCost;
    upgradeCostBar.max = pointUpgradeCost;
    upgradeCostBar.value = Math.min(points, pointUpgradeCost);
    pointUpgrades.textContent = "Upgrade points per click (" + pointUpgradeCost + " points)";
}

function updatePoints() {
    point.textContent = points;
    updateUpgradeCost();
}

function playPulse(element) {
    element.classList.remove("pulsing");
    void element.offsetWidth;
    element.classList.add("pulsing");
}

image.addEventListener("click", function() {
    points += pointsPerClick;
    updatePoints();
    playPulse(image);
});

secondUpgrade.addEventListener("click", function() {
    if (points >= clicksPerSecondCost) {
        points -= clicksPerSecondCost;
        clicksPerSecond += 1;
        clicksPerSecondCost = Math.ceil(clicksPerSecondCost * 1.5);
        updatePoints();
        clicksPerSecondText.textContent = clicksPerSecond;
        secondUpgrade.textContent = "Upgrade clicks per second (" + clicksPerSecondCost + " points)";
    }
});

setInterval(function() {
    if (clicksPerSecond > 0) {
        points += clicksPerSecond;
        updatePoints();
        playPulse(autoClickerImage);
    }
}, 1000);

pointUpgrades.addEventListener("click", function() {
    if (points >= pointUpgradeCost) {
        points -= pointUpgradeCost;
        pointsPerClick += 2;
        pointUpgradeCost = Math.ceil(pointUpgradeCost * 1.5);
        pointPerClickText.textContent = pointsPerClick;
        updatePoints();
    }
});

secondUpgrade.textContent = "Upgrade clicks per second (" + clicksPerSecondCost + " points)";
updateUpgradeCost();
