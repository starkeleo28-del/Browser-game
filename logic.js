const image = document.querySelector("#click");
const point = document.querySelector("#points");
const pointUpgrades = document.querySelector("#pointUpgrade");
const secondUpgrade = document.querySelector("#secondUpgrade");
const pointPerClickText = document.querySelector("#pointsPerClick");
const clicksPerSecondText = document.querySelector("#clicksPerSecond");
const upgradeCostText = document.querySelector("#upgradecost");
const upgradeCostBar = document.querySelector("#upgradeCostBar");
const autoClickerImage = document.querySelector("#click2");
const clickSound = new Audio("sounds/clickersound.mp3")

let upgradepointperclickcost = 10*2
let upgradeclickperseccost = 8*2
let pointperupgrade = 1
let upgradepointperclick = 1+2
let points = 0
let clicksPerSecond = 0
let upgradeClickPerSecondCost = 16

function updateUpgradeCost() {
    upgradeCostText.textContent = upgradepointperclickcost;
    upgradeCostBar.max = upgradepointperclickcost;
    upgradeCostBar.value = Math.min(points, upgradepointperclickcost);
}

image.addEventListener("click", function() {
    console.log ("image clicked!")
    points += pointperupgrade
    point.textContent = points;
    document.querySelector("click")
document.querySelector("#click")
image.classList.remove("pulsing");
void image.offsetWidth;
image.classList.add("pulsing");
})

secondUpgrade.addEventListener("click", function() {
    if (points >= upgradeClickPerSecondCost) {
        points -= upgradeClickPerSecondCost;
        clicksPerSecond += 1;
        upgradeClickPerSecondCost = Math.ceil(upgradeClickPerSecondCost * 1.5);
        point.textContent = points;
        clicksPerSecondText.textContent = clicksPerSecond;
        secondUpgrade.textContent = "Upgrade clicks per second (" + upgradeClickPerSecondCost + " points)";
    }
});

setInterval(function() {
    if (clicksPerSecond > 0) {
        points += clicksPerSecond;
        point.textContent = points;
        autoClickerImage.classList.remove("pulsing");
        void autoClickerImage.offsetWidth;
        autoClickerImage.classList.add("pulsing");
    }
}, 1000);

{
     {
        console.log ("upgrade clicked!")
        point.textContent = points;
        document.querySelector("click")
        document.querySelector("#click")
}
}
{
   
        document.querySelector("#pointsPerClick")
    if (points >= upgradepointperclickcost){
        points -= upgradepointperclickcost;
        pointperupgrade += 2
        upgradepointperclickcost = 
        Math.ceil(upgradepointperclickcost * 1.5);
        point.textContent = points;
        pointPerClickText.textContent = pointperupgrade;
        updateUpgradeCost();

    }
};
updateUpgradeCost();

{
    image.addEventListener("click", function(){
clickSound.currentTime = 0;
clickSound.play();
points += pointperupgrade;
point.textContent = points;
image.classList.remove("pulsing");
void image.offsetWidth;
image.classList.add("pulsing");



    });
}
