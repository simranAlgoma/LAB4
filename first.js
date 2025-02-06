function calculateSquare() {
  let number = document.getElementById("numberInput").value;
  let result = number * number;
  document.getElementById(
    "result"
  ).innerText = `Square of ${number} is ${result}`;
}
