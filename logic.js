const image = document.querySelector("#click");
const point = document.querySelector("#points");
const pointUpgrades = document.querySelector("#pointUpgrade");
const pointperclicktext = document.querySelector("#pointperclick");

let upgradepointperclickcost = 10*2
let upgradeclickperseccost = 8*2
let pointperupgrade = 1*2
let upgradepointperclick = 1*2
let points = 0

image.addEventListener("click", function() {
    console.log ("image clicked!")
    points += 1
    point.textContent = points;
    document.querySelector("click")
document.querySelector("#click")
})

{
    pointUpgrades.addEventListener("click", function() {
        console.log ("upgrade clicked!")
        pointperupgrade
        point.textContent = points;
        document.querySelector("click")
        document.querySelector("#click")
})
}