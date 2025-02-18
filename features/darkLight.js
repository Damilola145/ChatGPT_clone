const themeButton = document.querySelector("#theme-btn");

export const themeButtonFile = () => {
    document.body.classList.toggle("light-mode");
    const isLightMode = document.body.classList.contains("light-mode");
    localStorage.setItem("theme", isLightMode ? "light" : "dark");
    themeButton.innerText = isLightMode ? "dark_mode" : "light_mode";
};

export const applySavedTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
        themeButton.innerText = "dark_mode";
    } else {
        document.body.classList.remove("light-mode");
        themeButton.innerText = "light_mode";
    }
};