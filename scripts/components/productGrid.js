import { addToCart } from "../../data/cart.js";
import { renderHeader } from "./header.js";

export function renderProductGrid(products) {

//產生HTML：把儲存的資料生成一個一個div標籤，加到<div class="product-grid">
let html="";
//在forEach裡定義一個函數，參數叫做product，他是從陣列取出來的每一筆資料
//用箭頭函數，省略掉function，只有一個參數，()也可以省略，再加上=>
products.forEach( product => {
    html += `
            <div class="product-block">
                <a href="product.html#${product.id}">
                    <div class="product-image-row">
                        <img class="product-image" src="${product.img}">
                        <p class="product-discount">
                            ${product.discount ? product.discount + "折" : ""}
                        </p>
                    </div>
                    <div class="product-information">
                        <div class="product-text">
                            <p class="product-name">${product.name}</p>
                            <div class="add-success hidden-element js-add-success-${product.id}">
                                <img class="check-icon" src="images/icons/check.png">
                                <p class="add-success-p">加入購物車</p>
                            </div>
                            <div class="product-price-row">
                                <div class="product-price">
                                    <p class="discount-price">${ "$" + product.discountPrice}</p>
                                    <p class="origin-price">
                                        ${product.originalPrice ? "$" + product.originalPrice : ""}
                                    </p>
                                </div>
                                <img 
                                    data-product-id=${product.id} 
                                    data-product-price=${product.discountPrice}
                                    class="add-to-cart" 
                                    src="images/icons/cart.png">
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        `;
});

function showAddSuccess(productId) {
    const successElement = document.querySelector(`.js-add-success-${productId}`);
    if (successElement.classList.contains("hidden-element")) {
        successElement.classList.remove("hidden-element");
        successElement.classList.add("visible-element");

        setTimeout(() => {
            successElement.classList.remove("visible-element");
            successElement.classList.add("hidden-element");
        }, 1000);

    }
}

    document.querySelector(".product-grid").innerHTML = html;

    document.querySelectorAll(".add-to-cart").forEach((button) => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            const productId = button.dataset.productId
            addToCart(productId);    //呼叫加入購物車的函數addToCart()，並傳入productId

            // const cartNum = getCartNum();   //接收購物車內的商品總數，用變數儲存起來
            // document.querySelector(".cart-num").innerHTML = cartNum;    //把購物車內商品總數設定上去

            renderHeader(); //只要被點擊就呼叫renderHeader()，這樣就不用執行上面的程式碼了
            showAddSuccess(productId);
        });
    });
}