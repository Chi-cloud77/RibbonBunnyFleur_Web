import { searchProduct } from "../../data/products.js"; 
import { renderProductGrid } from "../components/productGrid.js";
import { renderHeader } from "../components/header.js";

renderHeader();
//解析目前URL中的查詢參數（query parameters），並將它們轉換成URLSearchParams 物件
const params = new URLSearchParams(location.search);

//傳入搜尋的內容後會到所有商品裡過濾出最適合的商品後回傳
const products = searchProduct(params.get("input"));
renderProductGrid(products);
