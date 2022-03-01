const nilai = document.getElementsByClassName("tombol");
const inputBox = document.getElementById("input");
let angka1 = 0;
let angka2 = 0;
let operasi = "";

for(let i = 0; i < nilai.length; i++) {
    console.log(nilai[i].innerText);
    nilai[i].addEventListener("click", function() {
        if (nilai[i].innerText === "+" || nilai[i].innerText === "-" || nilai[i].innerText === "*" || nilai[i].innerText === "/") {
            operasi = nilai[i].innerText;
            angka1 = input.value;
            input.value = "0";
        } else if (nilai[i].innerText === "=") {
            angka2 = input.value;

            if (operasi === "+")
                input.value = parseInt(angka1) + parseInt(angka2);
            if (operasi === "-")
                input.value = parseInt(angka1) - parseInt(angka2);
            if (operasi === "*")
                input.value = parseInt(angka1) * parseInt(angka2);
            if (operasi === "/")
                input.value = parseInt(angka1) / parseInt(angka2);
        
        } else {
            const currentValue = parseInt(input.value);
            if (currentValue === 0) {
                input.value = nilai[i].innerText;
            } else {
                input.value = currentValue + nilai[i].innerText;
            }
        }
    })
}


const reset = document.getElementById("reset");
reset.addEventListener("click", function() {
    inputBox.value = "0";
    angka1 = 0;
    angka2 = 0;
})
