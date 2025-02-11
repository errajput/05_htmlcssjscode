count = 0;
const countEl = document.getElementById("count");

document.getElementById("btn1").addEventListener("click", function () {
  count++;
  countEl.textContent = count;
});
document.getElementById("btn2").addEventListener("click", function () {
  count--;
  countEl.textContent = count;
});

document.getElementById("btn3").addEventListener("click", function () {
  count = count + 10;
  countEl.textContent = count;
});

document.getElementById("btn4").addEventListener("click", function () {
  count = 0;
  countEl.textContent = count;
});
