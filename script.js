const inputNum = document.getElementById("inputNum");
const btnCheck = document.getElementById("btnCheck");
const message = document.getElementById("message");
const attempt = document.getElementById("attempt");
const btnReset = document.getElementById("btnReset");

let number = Math.floor(Math.random() * 100) + 1;
let attCount = 0;

function check() {
    let num = inputNum.value;
    if (num === "") {
        alert("Введите число");
        return
    }
    num = Number(num);
    if (num < 1 || num > 100) {
        message.textContent = "Введите число от 1 до 100"
        return
    }
    attCount++;
    attempt.textContent = "Попыток: " + attCount;
    if (number > num) {
        message.textContent = "Больше!"
    } else if (number < num) {
        message.textContent = "Меньше!"
    } else {
        message.textContent = "Вы угадали!"
        attCount = 0;
        attempt.textContent = "Попыток: 0"
        number = Math.floor(Math.random() * 100) + 1;

        const card = document.querySelector(".game-card");
        card.classList.add("win");
        setTimeout(() => card.classList.remove("win"), 500);
        
        return;
    }
}

btnReset.addEventListener("click", function() {
    number = Math.floor(Math.random() * 100) + 1;
    attempt.textContent = "Попыток: 0"
    attCount = 0;
    message.textContent = "Введите число и нажмите проверить"
    inputNum.value = "";
});

btnCheck.addEventListener("click", check);

inputNum.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        check();
    }
});






