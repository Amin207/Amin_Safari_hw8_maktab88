const mainDiv = document.getElementById("mainDiv");

mainDiv.addEventListener("mouseover", function () {
  mainDiv.style.backgroundColor = "blue";
});

mainDiv.addEventListener("mouseout", function () {
  mainDiv.style.backgroundColor = "red";
});
