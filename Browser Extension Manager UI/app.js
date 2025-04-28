const logo = document.getElementById('logo')
const themeBtn = document.getElementById('theme-switch')

themeBtn.addEventListener("click",() => {
    document.body.classList.toggle("light-theme")
    
    const isDark = document.body.classList.contains("light-theme");
    themeBtn.src = isDark ? "images/icon-moon.svg" : "images/icon-sun.svg";
    logo.src = isDark ? "images/logo.svg" : "images/logo2.svg";
})



