const parentTextDiv = document.getElementById("parentText");
const targetTextDiv = document.getElementById("targetText");
const childTextDiv = document.getElementById("childNode");

const copyParentButton = document.getElementById("copyParent");
const copyChildButton = document.getElementById("copyChild");

const parentTextCopy = parentTextDiv.innerHTML;
const targetTextCopy = targetTextDiv.innerHTML;
const childTextCopy = childTextDiv.innerHTML;

copyParentButton.addEventListener("click", function () {
  targetTextDiv.innerHTML =
    parentTextCopy + targetTextCopy + childTextCopy + targetTextCopy;
});

copyChildButton.addEventListener("click", function () {
  targetTextDiv.innerHTML = childTextCopy + targetTextCopy;
});
