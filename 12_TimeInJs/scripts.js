function redirectToSchool() {
    clearTimeout(redirectToSchool);
    window.location.replace("http://www.sssvt.cz");
}

let redirectTimeOut = setInterval(redirectToSchool, 1000);

window.addEventListener('scroll',e => {
    clearInterval(redirectTimeOut);
    redirectTimeOut = setInterval(redirectToSchool, 10000);
})

window.addEventListener('click',e => {
    clearInterval(redirectTimeOut);
    redirectTimeOut = setInterval(redirectToSchool, 10000);
})

window.addEventListener('keypress',e => {
    clearInterval(redirectTimeOut);
    redirectTimeOut = setInterval(redirectToSchool, 10000);
})
