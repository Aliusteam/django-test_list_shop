// deleteRow.js

function updateRow(button, id, nameId, categoryId, countId, weightId, commentId, dateId, priceId) {

    // Находим родительскую строку (TR)
    var row = button.parentNode.parentNode;

    var name = document.getElementById(nameId).innerText;
    var category = document.getElementById(categoryId).innerText || 'нет';
    var count = document.getElementById(countId).innerText || 0;
    var weight = document.getElementById(weightId).innerText || 0;
    var comment = document.getElementById(commentId).innerText || 'нет';
    var date = encodeURIComponent(document.getElementById(dateId).innerText || '...');
    var price = document.getElementById(priceId).innerText || 0;

    $.ajax({
        url: 'update_row/' + id + '/' + name + '/' + category + '/' + count + '/'
            + weight + '/' + comment + '/' + date + '/' + price + '/',
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },



        })




    // // AJAX-запрос на сервер для удаления записи  + '/'
    //     fetch('update_row/' + id + '/' + name + '/' + category + '/' + count + '/'
    //         + weight + '/' + comment + '/' + date + '/' + price + '/', {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json',
    //
    //         }})
}
