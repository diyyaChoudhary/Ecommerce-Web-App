const productList = document.getElementById("product-list");

console.log(productList);
console.log(products);

productList.innerHTML = products.map(product => `
  <div class="card" onclick="openProduct(${product.id})">
    <img src="${product.image}" />
    <h2>${product.name}</h2>
    <p>₹${product.price}</p>
    <p>⭐ ${product.rating}</p>
  </div>
`).join("");

// detail page function
function openProduct(id) {
  localStorage.setItem("id", id);
  window.location.href = "product.html";
}
productList.innerHTML = products.map(product => `
  <div class="card">

    <img src="${product.image}" />

    <h2>${product.name}</h2>

    <p class="price">Rs. ${product.price}</p>

    <p class="rating">Rating: ${product.rating}</p>

    <button class="cart-btn" onclick="addToCart(${product.id})">
      Add to Cart
    </button>

  </div>
`).join("");

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(id);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Product added to cart 🛒");
}