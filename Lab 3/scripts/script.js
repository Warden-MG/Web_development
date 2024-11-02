const adding = document.getElementById("adding");
const title = document.querySelector("h2");
const fioInput = document.getElementById("FIO")
const emailInput = document.getElementById("EMAIL")
const numberInput = document.getElementById("NUMBER")
const tgInput = document.getElementById("TG")
const table = document.getElementById("table")
const form = document.getElementById("form");
const error = document.getElementById("error")

const checkValid = (item) => {
    return Boolean(item.length);
}


form.addEventListener("submit", (event) => {
    event.preventDefault();

    error.innerText= "";

    if (!checkValid(fioInput.value)) {
        error.innerText = "Поле ФИО не заполнено!"
        return;
    }
    if (!checkValid(emailInput.value)) {
        error.innerText = "Поле Почта не заполнено!"
        return;
    }
    if (!checkValid(numberInput.value)) {
        error.innerText = "Поле Телефон не заполнено!"
        return;
    }
    if (!checkValid(tgInput.value)) {
        error.innerText = "Поле Телеграмм не заполнено!"
        return;
    }

    table.innerHTML += `<tr> <td> ${fioInput.value} </td> <td> <a href="mailto:${emailInput.value}"> ${emailInput.value} </a> </td> <td> <a href="tel:${numberInput.value}">${numberInput.value} </a></td> <td> ${tgInput.value}</td> </tr>`;

})

//--------------------------------------Slider 
const slides = document.querySelectorAll('.slider .slide');
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

document.querySelector('.slider .prev').addEventListener('click', () => {
  showSlide(currentSlide - 1);
});

document.querySelector('.slider .next').addEventListener('click', () => {
  showSlide(currentSlide + 1);
});


