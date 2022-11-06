let numbers = []; 

// function save() {
//     numbers[0] = document.getElementById("1").value;
//     numbers[1] = document.getElementById("2").value;
//     numbers[2] = document.getElementById("3").value;
//     numbers[3] = document.getElementById("4").value;

//     console.log(numbers);
// }

let input = document.getElementById("1");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        numbers.push = Number(document.getElementById("1").value);
        console.log(numbers);
        document.getElementById("1").value ='';
    }        
});

function sumInput() {
    alert(numbers);
}