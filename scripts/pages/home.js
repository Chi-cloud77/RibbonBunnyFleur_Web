//引入變數
import {cart, addToCart, getCartNum} from "../../data/cart.js";
import {products} from "../../data/products.js";
import { renderHeader } from "../components/header.js";
import { renderProductGrid } from "../components/productGrid.js";

renderHeader();
renderProductGrid(products);

