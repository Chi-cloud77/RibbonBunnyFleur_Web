import {cart} from "../../data/cart.js"
import { getProduct } from "../../data/products.js";
import { getDeliveryOption} from"../../data/deliveryOptions.js";

export function renderCheckoutPrice() {
    let productNum = 0;
    let productPrice = 0;
    let deliveryPrice = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
        const productId = item.id;
        const product = getProduct(productId);
        const deliveryId = item.deliveryId;
        const deliveryOption = getDeliveryOption(deliveryId);
        productNum += item.num;
        productPrice += product.discountPrice*item.num;
        deliveryPrice += deliveryOption.price;
    });

    totalPrice = productPrice + deliveryPrice;

    const html = `
            <h2 class="checkout-summary">訂單總結</h2>
            <p class="checkout-items">
                <span>總商品數：</span>
                <span>${productNum} </span>             
            </p>
            <p class="items-price">
                <span>金額 : </span>
                <span>$${productPrice}</span>
            </p>
            <p class="delivery-price">
                <span>運費 : </span>
                <span>$${deliveryPrice}</span>
            </p>
            <hr class="checkout-summary-hr">
            <p class="total-price">
                <span>總額 : </span>
                <span>$${totalPrice}</span>
            </p>
            <button class="checkout-button">結帳</button>
        `
        
    document.querySelector(".checkout-right").innerHTML = html;

}