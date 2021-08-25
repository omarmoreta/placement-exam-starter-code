let yourName = "Omar Moreta";

let gb = 0;
let cc = 0;
let sugar = 0;
let total = 0;

document.getElementById("credit").textContent = `Created by ${yourName}`;

gb = document.querySelector("#qty-gb");
cc = document.querySelector("#qty-cc");
sugar = document.querySelector("#qty-sugar");
total = document.querySelector("#qty-total");

document.getElementById("add-gb").addEventListener("click", function () {
  gb.innerHTML = parseInt(gb.innerHTML) + 1;
  total.innerHTML = parseInt(total.innerHTML) + 1;
});

document.getElementById("minus-gb").addEventListener("click", function () {
  gb.innerHTML = parseInt(gb.innerHTML) - 1;
  total.innerHTML = parseInt(total.innerHTML) - 1;
});

document.getElementById("add-cc").addEventListener("click", function () {
  cc.innerHTML = parseInt(cc.innerHTML) + 1;
  total.innerHTML = parseInt(total.innerHTML) + 1;
});

document.getElementById("minus-cc").addEventListener("click", function () {
  cc.innerHTML = parseInt(cc.innerHTML) - 1;
  total.innerHTML = parseInt(total.innerHTML) - 1;
});

document.getElementById("add-sugar").addEventListener("click", function () {
  sugar.innerHTML = parseInt(sugar.innerHTML) + 1;
  total.innerHTML = parseInt(total.innerHTML) + 1;
});

document.getElementById("minus-sugar").addEventListener("click", function () {
  sugar.innerHTML = parseInt(sugar.innerHTML) - 1;
  total.innerHTML = parseInt(total.innerHTML) - 1;
});
