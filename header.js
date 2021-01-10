window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#burgerknap").addEventListener("click", toggleMenu);
}

function toggleMenu() {
    document.querySelector("#burgerfane").classList.toggle("hidden");
}
