const mainDiv = document.getElementById("mainDiv");
const intendedText = "Click added some text!";

mainDiv.addEventListener("click", function () {
  mainDiv.innerHTML += intendedText;
});
