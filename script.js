const container =
document.getElementById("productContainer");

const cart =
document.getElementById("cart");

const total =
document.getElementById("total");

let cartItems = [];
let totalAmount = 0;

function displayProducts(){

products.forEach(product=>{

const div =
document.createElement("div");

div.classList.add("product");

div.innerHTML=`
<h3>${product.name}</h3>
<p>Price: ₹${product.price}</p>
<button onclick="addToCart(${product.id})">
Add To Cart
</button>
`;

container.appendChild(div);

});
}

function addToCart(id){

const product =
products.find(p=>p.id===id);

cartItems.push(product);

totalAmount += product.price;

const li =
document.createElement("li");

li.textContent =
`${product.name} - ₹${product.price}`;

cart.appendChild(li);

total.textContent = totalAmount;

}

displayProducts();
