const image = document.querySelector("#click");
const point = document.querySelector("#points");
const pointUpgrades = document.querySelector("#pointUpgrade");
const pointPerClickText = document.querySelector("#pointsPerClick");
const upgradeCostText = document.querySelector("#upgradecost");
const upgradeCostBar = document.querySelector("#upgradeCostBar");

let upgradepointperclickcost = 10*2
let upgradeclickperseccost = 8*2
let pointperupgrade = 1
let upgradepointperclick = 1+1
let points = 0
let upgradecost = 20*2

image.addEventListener("click", function() {
    console.log ("image clicked!")
    points += pointperupgrade
    point.textContent = points;
    document.querySelector("click")
document.querySelector("#click")
})

{
    pointUpgrades.addEventListener("click", function() {
        console.log ("upgrade clicked!")
        point.textContent = points;
        document.querySelector("click")
        document.querySelector("#click")
})
}
{
    pointUpgrades.addEventListener("click", function(){
        document.querySelector("#pointsPerClick")
    if (points >= upgradepointperclickcost){
        pointperupgrade += 1
        upgradepointperclickcost = 
        Math.ceil(upgradepointperclickcost * 1.5);
        point.textContent = points;
        pointPerClickText.textContent = pointperupgrade;

    }
});
}
{
    console.log(upgradeCostText);
    upgradepointperclickcost = Math.ceil(upgradepointperclickcost * 1.5);
upgradeCostText.textContent = upgradepointperclickcost; 
upgradeCostBar.max = upgradepointperclickcost;
upgradeCostBar.value = points;



}