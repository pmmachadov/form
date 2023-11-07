const spicyLevelInput = document.getElementById("spicy-level");
const spicyOutput = document.getElementById("spicy-output");

spicyLevelInput.addEventListener("input", function () {
  spicyOutput.textContent = "Spicy Level: " + spicyLevelInput.value;
});

const saltLevelInput = document.getElementById("salt-level");
const saltOutput = document.getElementById("salt-output");

saltLevelInput.addEventListener("input", function () {
  saltOutput.textContent = "Salt Level: " + saltLevelInput.value;
});