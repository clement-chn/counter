let count = 0;
let countCount = 0;

const number = document.getElementById("number");
const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const reset = document.getElementById("reset");

decrease.addEventListener('click', () => {
    count--;
    if (count < 0) { number.style.color = "red" };
    if (count === 0) { number.style.color = "black" };
    return number.textContent = count;
})

increase.addEventListener('click', () => {
    count++;
    if (count > 0) { number.style.color = "green" };
    if (count === 0) { number.style.color = "black" };
    return number.textContent = count;
})

reset.addEventListener('click', () => {
    count = 0;
    number.style.color = "black";
    return number.textContent = 0;
})

