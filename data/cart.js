export let cart = JSON.parse(localStorage.getItem("cart"))
    if (!cart) {
        cart = [];
    }

[];

// console.log(cart);

//cart是要儲存的資料名稱，瀏覽器只能儲存字串，要先轉成JSON格式
function updateStorage() {
    localStorage.setItem("cart", JSON.stringify(cart))
};

//把加入購物車的功能寫成一個函數，(productId)表示接收商品的id，
// (buyNum)是商品頁選擇加入的數量，讓他預設值=1，也就是沒有傳入第二個參數時，buyNum就=1
export function addToCart(productId, buyNum=1) {
    let cartItem;
    cart.forEach((item) => {
        if(item.id === productId) {
            cartItem = item;
        }    
    });

    /* 
    如果上面的if判斷皆無成立，cartItem就會是undefined
    undefined是faisy value，就會執行底下else的程式碼，將商品加入購物車
    如果cartItem是一個物件，是truthy value，表示已經在購物車裡，則把他的num屬性+1
    */

    if (cartItem) {
        cartItem.num += buyNum;
    } else{
        cart.push({
            id: productId,
            num: 1,
            deliveryId: "1"
        });
    }
    updateStorage();
}

//取得購物車裡的商品總數
export function getCartNum() {
    //創建一個變數cartNum儲存購物車內商品總數
    let cartNum = 0;
    //用forEach跑過購物車內每一筆資料，cart陣列就是購物車
    //每一個值都是一個物件，用變數item儲存起來，每一筆都加到cartNum
    cart.forEach((item) => {
        cartNum += item.num;
    });  
    return cartNum; //回傳計算出的商品總數
    // updateStorage();
}

export function deleteFromCart(productId) {
    //創建一個新陣列，把不是刪除的商品都加進來
    const newCart = [];
    cart.forEach((item) => {
        //如果item的id和要刪除的商品id不同
        if (item.id !== productId){
            //把他加到新購物車陣列
            newCart.push(item);
        }
    })
    //除了被刪除的商品以外都加到新的購物車，等於把這個商品從購物車裡刪除
    cart = newCart;
    updateStorage();
}

//傳入productId(要修改的商品的id),deliveryId(修改成哪一種運送方式，他的id)
export function updateCart(productId, deliveryId, buyNum) {
    cart.forEach((item) => {
        if(item.id === productId) {
            if(deliveryId){
                item.deliveryId = deliveryId;
            }
            
            if(buyNum){
                item.num = buyNum;
            }
        }
    });
    updateStorage();
}


