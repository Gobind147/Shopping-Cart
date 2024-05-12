let ShoppingCart = document.getElementById("shopping-cart");
let label = document.getElementById("label");



/**
 * ! Basket to hold all the selected items
 * ? the getItem part is retrieving data from the local storage
 * ? if local storage is blank, basket becomes an empty array
 */

let basket = JSON.parse(localStorage.getItem("data")) || [];

/**
 * ! To calculate total amount of selected Items
 */

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

/**
 * ! Generates the Cart Page with product cards composed of
 * ! images, title, price, buttons, & Total price
 * ? When basket is blank -> show's Cart is Empty
 */

let generateCartItems = () => {
  if (basket.length !== 0) {
    return (ShoppingCart.innerHTML = basket.map((x)=>{
        console.log(x);
        let {id,item} = x;
        let search = shopItemsData.find((y)=>y.id === id) || [];
        return `
        <div class="cart-item">
            <img width = "100" src=${search.img} alt="" />
        </div>
        `;
    })
    .join(""));
  } else {
    ShoppingCart.innerHTML = "";
    label.innerHTML = `
    <h2>Cart is Empty</h2>
    <a href="index.html">
      <button class="HomeBtn">Back to Home</button>
    </a>
    `;
  }
};

generateCartItems();
