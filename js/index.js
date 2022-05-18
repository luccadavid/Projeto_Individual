window.onscroll = function () {
    if (window.scrollY < inicio.offsetHeight) {
        header1.style = " background-color: rgba(0, 0, 0, 0); ";
    }
    if (window.scrollY >= inicio.offsetHeight) {
        header1.style = " background-color: rgb(4, 48, 0);  ";
    }
}