let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

// Toggle cart visibility
cartIcon.onclick = () => {
  cart.classList.toggle("active");
};

closeCart.onclick = () => {
  cart.classList.remove("active");
};

// Initialize cart functionality when ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  // Attach event listeners to remove buttons in the cart
  var removeCartButtons = document.getElementsByClassName("cart-remove");
  for (var i = 0; i < removeCartButtons.length; i++) {
    var button = removeCartButtons[i];
    button.addEventListener("click", removeCartItem);
  }

  // Update quantities in cart
  var quantityInputs = document.getElementsByClassName("cart-quantity");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }

  // Add to cart buttons
  var addCart = document.getElementsByClassName("add-cart");
  for (var i = 0; i < addCart.length; i++) {
    var button = addCart[i];
    button.addEventListener("click", addCartClicked);
  }
  // buy button work
  document
    .getElementsByClassName("btn-buy")[0]
    .addEventListener("click", buyBbuttoClicked);
}
// buy button
function buyBbuttoClicked() {
  alert("Your Order is placed");
  var cartContent = document.getElementsByClassName("cart-content")[0];
  while (cartContent.hasChildNodes()) {
    cartContent.removeChild(cartContent.firstChild);
  }
  updateTotal();
}

// Remove item from cart
function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updateTotal();
}

// Update the total when the quantity changes
function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateTotal();
}

// Function to handle adding an item to the cart
function addCartClicked(event) {
  var button = event.target;
  var shopProduct = button.parentElement;
  var title = shopProduct.getElementsByClassName("product-title")[0].innerText;
  var price = shopProduct.getElementsByClassName("price")[0].innerText;
  var productImg = shopProduct.getElementsByClassName("product-img")[0].src;
  addProductToCart(title, price, productImg);
  updateTotal();
}

// Function to add a product to the cart
function addProductToCart(title, price, productImg) {
  var cartItems = document.getElementsByClassName("cart-content")[0];
  var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
  for (var i = 0; i < cartItemsNames.length; i++) {
    if (cartItemsNames[i].innerText === title) {
      alert("You have already added this item to cart");
      return;
    }
  }

  var cartBoxContent = `
    <img src="${productImg}" alt="" class="cart-img">
    <div class="detail-box">
      <div class="cart-product-title">${title}</div>
      <div class="cart-price">${price}</div>
      <input type="number" value="1" class="cart-quantity">
    </div>
    <i class="bx bxs-trash-alt cart-remove"></i>
  `;

  var cartShopBox = document.createElement("div");
  cartShopBox.classList.add("cart-box");
  cartShopBox.innerHTML = cartBoxContent;
  cartItems.append(cartShopBox);
  cartShopBox
    .getElementsByClassName("cart-remove")[0]
    .addEventListener("click", removeCartItem);
  cartShopBox
    .getElementsByClassName("cart-quantity")[0]
    .addEventListener("change", quantityChanged);
}

// Function to update the total price
function updateTotal() {
  var cartContent = document.getElementsByClassName("cart-content")[0];
  var cartBoxes = cartContent.getElementsByClassName("cart-box");
  var total = 0;
  for (var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName("cart-price")[0];
    var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    var price = parseFloat(priceElement.innerText.replace("₱", ""));
    var quantity = quantityElement.value;
    total += quantity * price;
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("total-price")[0].innerText = "₱" + total;
}

// database
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".bx-shopping-bag").forEach((item) => {
    item.addEventListener("click", function () {
      const productBox = this.closest(".product-box");
      const product_id = productBox.id;
      const product_title = productBox
        .querySelector(".product-title")
        .textContent.trim();
      const priceText = productBox.querySelector(".price").textContent.trim();
      const price = parseFloat(priceText.replace("₱", "").replace(",", ""));
      const quantity = 1; // Assume quantity is 1 for simplicity

      // AJAX request to the PHP server
      fetch("insertProduct.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `product_id=${encodeURIComponent(
          product_id
        )}&product_title=${encodeURIComponent(
          product_title
        )}&price=${price}&quantity=${quantity}`,
      })
        .then((response) => response.text())
        .then((data) => console.log(data))
        .catch((error) => console.error("Error:", error));
    });
  });
});
