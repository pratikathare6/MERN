const htmltag = document.documentElement;
const dark = "dark-theme";
const light = "light-theme";
const savedTheme = localStorage.getItem('theme');

// 1. Apply saved theme FIRST (user preference > system)
if (savedTheme === dark || savedTheme === light) {
    htmltag.classList.remove(dark, light);
    htmltag.classList.add(savedTheme);
} 
// 2. Fallback to system preference
else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    htmltag.classList.add(dark);
} else {
    htmltag.classList.add(light);
}

// Toggle button - one-liner logic
document.querySelector("#themeToggle").addEventListener("click", () => {
    const isDark = htmltag.classList.contains(dark);
    htmltag.classList.remove(dark, light);
    htmltag.classList.add(isDark ? light : dark);
    localStorage.setItem("theme", isDark ? light : dark);
});
