  let shop  = document.getElementById('shop');


 let shopItemsData = [{
    id:"jkjcbkscksc",
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-1.jpg"
 },
 {
    id:"jkjcmnjnkas",
    name: "Office Shirt",
    price: 100,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-2.jpg"
 },
 {
    id:"jkjcnmsmc",
    name: "T-Shirt",
    price: 25,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-3.jpg"
 },
 {
    id:"jkjcDJHJF",
    name: "Mens Suit",
    price: 300,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-4.jpg"
 }]


 let generateShop =()=>{
    return (shop.innerHTML= shopItemsData.map((x)=>{
        return `
        <div class="item">
                <img width="220" src="images/img-1.jpg" alt="">
                <div class="details">
                    <h3>Casual Shirt</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <div class="price-quantity">
                     <h2>$ 45</h2>
                     <div class="buttons">
                        <i class="bi bi-dash-lg"></i>
                        <div class="quantity">0</div>
                        <i class="bi bi-plus-lg"></i>
                     </div>       
                    </div>
                </div>
            </div>
        `;
    }).join(""));
 };

 generateShop();
