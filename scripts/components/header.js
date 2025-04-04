import {getCartNum} from "../../data/cart.js";

export function renderHeader() {

const html = `
    <div class="header-container">
        <div class="header-left">
            <a href="home.html">
                <img class="logo-icon" src="images/icons/logo.png">
            </a>
        </div>
        
        <div class="header-right">
            <div class="search">
                <input class="search-input" placeholder="搜尋">
                <button class="search-button">
                    <img class="search-icon" src="images/icons/search.svg">
                </button>
            </div>
            <div class="cart">
                <a href="checkout.html">
                    <img class="cart-icon" src="images/icons/cart.png">
                </a>
                <p class="cart-num">${getCartNum()}</p>
            </div>
        </div>
    `;

document.querySelector(".header").innerHTML = html;

document.querySelector(".search-button").addEventListener("click", () => {
    const searchText  = document.querySelector(".search-input").value;
    location.href = `/search.html?input=${searchText}`;
});

}