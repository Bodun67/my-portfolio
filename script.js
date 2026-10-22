const themeButton = document.querySelector("#themeButton");

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const lightThemeIsActive = document.body.classList.contains("light");
  themeButton.textContent = lightThemeIsActive
    ? "Увімкнути темну тему"
    : "Увімкнути світлу тему";
});
