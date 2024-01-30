const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".slider .progress");
let priceGap = 1;

priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);

        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }

        }
    });
});

// rangeInput.forEach(input =>{
//     input.addEventListener("input", e =>{
//         let minVal = parseInt(rangeInput[0].value),
//         maxVal = parseInt(rangeInput[1].value);
//
//         if((maxVal - minVal) < priceGap){
//             if(e.target.className === "range-min"){
//                 rangeInput[0].value = maxVal - priceGap
//             }else{
//                 rangeInput[1].value = minVal + priceGap;
//             }
//         }else{
//             priceInput[0].value = minVal;
//             priceInput[1].value = maxVal;
//             range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
//             range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
//         }
//
//     });
// });

rangeInput.forEach(input => {
    input.addEventListener("change", () => {
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);

        if ((maxVal - minVal) < priceGap) {
            // Обработка случая, когда разница между значениями слишком мала
            if (input.className === "range-min") {
                rangeInput[0].value = maxVal - priceGap;
            } else {
                rangeInput[1].value = minVal + priceGap;
            }
        } else {
            // Обработка случая, когда разница подходит
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;

            // Проверка, чтобы избежать деления на ноль
            let leftPercentage = rangeInput[0].max !== 0 ? (minVal / rangeInput[0].max) * 100 : 0;
            let rightPercentage = rangeInput[1].max !== 0 ? 100 - (maxVal / rangeInput[1].max) * 100 : 100;


            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";

            // range.style.left = leftPercentage + "%";
            // range.style.right = rightPercentage + "%";

        }
        // console.log(minVal, maxVal)
        $.getScript("/static/filterTable.js", function() {
            funFilterTable(minVal, maxVal)

        });
    });
});
