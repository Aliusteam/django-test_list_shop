// deleteRow.js

function deleteRow(button, id) {

    // Находим родительскую строку (TR)
    var row = button.parentNode.parentNode;
    // Удаляем строку из DOM
    row.remove();

    // AJAX-запрос на сервер для удаления записи  + '/'
        fetch('delete_row/' + id , {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',

            }})




    // Ваш код для отправки запроса на сервер и удаления записи из базы данных
    // Пример: вы можете использовать AJAX для отправки запроса на сервер
}
