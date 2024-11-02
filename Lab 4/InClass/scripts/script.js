const timer=document.getElementById("timer");
let timerValue = 30;
const users = document.getElementById("users");

const interval = setInterval(() => {
    timerValue--;
    timer.innerText = timerValue;

    if (timerValue == 0) {
        clearInterval(interval); 
    }

}, 1000)

setTimeout(() => {
    console.log("Hi after 5s");
}, 5000)



const getAllUsers = () => {
    const res = fetch("https://jsonplaceholder.typicode.com/users");

    // Вывод имени пользователя через Апи
    res.then((response) => {
        return response.json();  
    }).then((data) => {
        console.log(data);

        data.forEach((user) => {
            users.innerHTML += `<a href="?id=${user.id}"> ${user.username}</a><br>`;
        });
    })
}

const getUserByID = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();

    users.innerHTML += `<div>
    <h1>${data.name}</h1>
    <p>${data.username}</p>
    <a href="mailto:${data.email}"> ${data.email} </a> |
    <a href="tel:${data.phone}"> ${data.phone} </a>
    </div><br>
    <a href="/">Назад</a>
    `;
}

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

console.log(id);

if (id == null) {
    getAllUsers();
} else {
    getUserByID(id);
}

