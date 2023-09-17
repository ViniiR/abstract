"use strict";

const searchButton = document.querySelector("button#searchButton");
const leaveButton = document.querySelector("div#leaveButton");
const menuButton = document.querySelector("article#menu-button-container");

const isActive = {
    menu: false,
};

searchButton.addEventListener("click", function (event) {
    event.stopPropagation();
    const aside = this.querySelector("aside#searchMenu");
    if (aside.style.display === "" || aside.style.display === "none") {
        aside.style.display = "flex";
    }
});

leaveButton.addEventListener("click", function (event) {
    event.stopPropagation();
    this.parentNode.style.display = "none";
});

menuButton.addEventListener("click", function () {
    const asideMenu = document.querySelector("aside#aside-menu");
    const headerUpperSection = document.querySelector("#upperSection");
    const input = this.querySelector("input#hamburguer-menu-button");
    if (!isActive.menu) {
        headerUpperSection.style.backgroundColor = "rgb(44, 44, 44)";
        asideMenu.style.display = "flex";
        isActive.menu = true;
        input.checked = true;
    } else {
        headerUpperSection.style.backgroundColor = "black";
        asideMenu.style.display = "none";
        isActive.menu = false;
        input.checked = false;
    }
});
