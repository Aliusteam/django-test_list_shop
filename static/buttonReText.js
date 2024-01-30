

$(document).ready(function (){   // Загрузка всей страницы
    $(".dropdown-menu a").click(function() {   // Получаем значение, куда нажали
        var selectedText = $(this).text();   // перменная =  текст нажатой кнопки
        var selectedId = $(this).attr('id');  //перменная =  id нажатой кнопки
        $(".btn-danger").text(selectedText);   // записываем id нажатой кнопки

        // console.log(selectedText)
        // console.log(selectedId)



        // Вызывавем код, который сортирует таблицу по выбранному id
        // Передаем полученный id текста - из кнопки
        $.getScript("/static/sortTable.js", function() {
            funSortTable(selectedId);



        });
    });
})









