import { getProduct } from "../../data/products.js";
import {renderHeader} from "../components/header.js";
import {addToCart} from "../../data/cart.js";

renderHeader();

const productId = location.hash.substring(1);    //從第2位開始切割，切到最後一位回傳(直接從網址取得商品id)
const product = getProduct(productId);
// console.log(productId);

const html = `
    <div class="product-block">
        <img class="product-image" src="${product.img}" />
        <div class="product-information">
            <h1 class="product-name">${product.name}</h1>
            <div class="product-rating">
                <p class="rating-count">${product.stars}</p>
                <img class="rating-stars" src="images/ratings/rating_${Math.round(product.stars/0.5)*5}.png">
                <p class="comment-num">${product.commentNum} 則評論</p>
            </div>
                <div class="sell-information">
                    ${product.discount ? 
                    '<p class="product-discount">' + product.discount + '折</p>': ""}                   
                    <p class="sell-num">已出售 ${product.sellNum}</p>
                </div>
                <div class="product-price">
                    ${product.originalPrice ? 
                    '<p class="origin-price">' + "$" + product.originalPrice + '</p>' : ""}
                    <p class="discount-price">$${product.discountPrice}</p>
                </div>
                
                <div class="buy-num-row">
                    <p class="num-p">預約人數</p>
                    <select class="buy-num">
                        <option selected value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
                <button class="add-to-cart">加入購物車</button>
                <div class="add-success hidden-element">
                    <img class="check-icon" src="images/icons/check.png">
                    <p class="add-success-p">加入購物車</p>
                </div>
            </div>
        </div>
        <div class="description-block">
            <p class="description-p">課程描述</p>
            <p class="product-description">
                ${product.description}
            </p>
        </div>
    `;

    function showAddSuccess() {
        const successElement = document.querySelector(".add-success");
        if (successElement.classList.contains("hidden-element")) {
            successElement.classList.remove("hidden-element");
            successElement.classList.add("visible-element");

            setTimeout(() => {
                successElement.classList.remove("visible-element");
                successElement.classList.add("hidden-element");
            }, 1000);

        }
    }



    document.querySelector(".js-product-info").innerHTML = html;

    document.querySelector(".add-to-cart").addEventListener("click", () => {
        const buyNum = Number(document.querySelector(".buy-num").value);
        addToCart(productId, buyNum);
        renderHeader();
        showAddSuccess();
    });

   
