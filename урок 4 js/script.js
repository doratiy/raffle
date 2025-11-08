let prize_values = [];
const prize_number = document.querySelectorAll(".prize__number");
const prize_result = document.querySelector(".prize__result");
const button = document.querySelector(".prize__button");
const prize = document.querySelectorAll(".prize");

for (let i=0; i<prize.length;i++) {
    prize_values.push(parseInt(prize_number[i].textContent));
}

function get_number() {
    const number = Math.floor(Math.random() * (prize_values.length));
    return number;
}

function get_prize() {
    let number = get_number();
    for (let i=0; i<prize.length; i++) {
        if (i === number) {
            prize[i].classList.add("active");
        }
        else {
            prize[i].classList.remove("active");
        }
        prize_result.textContent = prize[number].querySelector(".prize__name").textContent;
    }
}

button.addEventListener("click", get_prize);