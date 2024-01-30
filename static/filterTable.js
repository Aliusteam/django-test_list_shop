function funFilterTable(minVal, maxVal) {

    // AJAX-запрос на сервер для сортировки таблицы  + '/'
    $.ajax({
        url: 'filter/' + minVal + '/' + maxVal,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },

        success: function (data) {
            // Обновление содержимого страницы
            $('.table').empty();  // Чистим данные таблицы

            // Ищем элемент table внутри data
            var tableElement = $(data).find('.table');

            // Вставляем данные таблицы
            $('.table').html(tableElement);

            // Дополнительная логика для обработки данных
            }
        ,
            error: function (error) {
                console.error('Ошибка при запросе данных:', error);
            }

        })
}