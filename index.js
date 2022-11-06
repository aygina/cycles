let numbers = [];
let showNumbers = [];

let input = document.getElementById("1");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        numbers.push(Number(document.getElementById("1").value));
        console.log(numbers);
        document.getElementById("1").value = '';
    }
});

function sumInput() {
    function sortNumbers(a, b) {
        if (a > b) {
            return 1;
        } else if (b > a) {
            return -1;
        } else {
            return 0;
        }
    }
    numbers.sort(sortNumbers);
    for (let i = 0; i < numbers.length; i++) {
        showNumbers = showNumbers + numbers[i] + ` `;
    }

    let result = numbers.reduce(function (sum, current) {
        return sum + current;
    }, 0);

    alert(`Массив отсортирован:  ` + showNumbers + `\n` + `Сумма массива:  ` + result );
}