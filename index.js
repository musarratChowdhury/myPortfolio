let hidepass = document.getElementById("pass");
let box = document.getElementById("numberBox");
let btn = document.getElementById("subbtn");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (box.value == 71) {
    hidepass.style.display = "block";
    console.log(box.value);
  }
});
