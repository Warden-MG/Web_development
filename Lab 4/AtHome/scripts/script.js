document.getElementById('fetchButton').addEventListener('click', function() {
    const todoId = document.getElementById('todoId').value;
    
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Сеть не отвечает');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('result').innerText = data.title;
        })
        .catch(error => {
            document.getElementById('result').innerText = 'Ошибка: ' + error.message;
        });
});