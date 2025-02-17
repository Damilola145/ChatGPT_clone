const themeButton = document.querySelector("#theme-btn");

export const themeButtonFile = () => {
    document.body.classList.toggle("light-mode");
    themeButton.innerText = document.body.classList.contains("light-mode") ? "dark_mode" : "light_mode";
};