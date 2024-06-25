document.addEventListener("DOMContentLoaded", function () {
  fetchProducts();
  setupFormSubmission();

  var paymentMethods = document.querySelectorAll('input[name="paymentMethod"]');
  var cardInputs = document.querySelectorAll(
    "#cc-name, #cc-number, #cc-expiration, #cc-cvv"
  );

  function toggleCardInputs(disable) {
    cardInputs.forEach((input) => {
      input.disabled = disable;
    });
  }

  paymentMethods.forEach((method) => {
    method.addEventListener("change", function () {
      if (this.id === "cod") {
        toggleCardInputs(true); // Disable card inputs if Cash on Delivery is selected
      } else {
        toggleCardInputs(false); // Enable card inputs otherwise
      }
    });
  });
});

function fetchProducts() {
  fetch("fetchProducts.php")
    .then((response) => response.json())
    .then((products) => {
      updateCartUI(products);
    })
    .catch((error) => console.error("Error fetching products:", error));
}

function updateCartUI(products) {
  const cartList = document.querySelector(".list-group.mb-3");
  cartList.innerHTML = ""; // Clear existing cart content
  let total = 0;

  products.forEach((product) => {
    const price = parseFloat(product.price);
    total += price;
    cartList.innerHTML += `
            <li class="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <h6 class="my-0">${product.product_title}</h6>
                    <small class="text-muted">Brief description</small>
                </div>
                <span class="text-muted">₱${price.toFixed(2)}</span>
            </li>
        `;
  });

  cartList.innerHTML += `
        <li class="list-group-item d-flex justify-content-between">
            <span>Total (PHP)</span>
            <strong>₱${total.toFixed(2)}</strong>
        </li>
    `;

  const badge = document.querySelector(".badge");
  badge.textContent = products.length; // Update the count of items in the cart
}

function setupFormSubmission() {
  document
    .getElementById("checkout-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission behavior

      const formData = new FormData(this);
      fetch("fetchProducts.php")
        .then((response) => response.json())
        .then((products) => {
          let total = 0;
          products.forEach((product, index) => {
            formData.append(`products[${index}][name]`, product.product_title);
            formData.append(`products[${index}][price]`, product.price);
            total += parseFloat(product.price);
          });
          formData.append("total_price", total.toFixed(2));
          formData.append(
            "payment_type",
            document.querySelector('input[name="paymentMethod"]:checked').value
          );

          // POST the formData object to the server
          fetch("insertCheckoutDetails.php", {
            method: "POST",
            body: formData,
          })
            .then((response) => response.text())
            .then((result) => {
              alert("Checkout completed successfully!");
              console.log(result);
            })
            .catch((error) => {
              console.error("Error:", error);
              alert("Error submitting checkout form.");
            });
        })
        .catch((error) => console.error("Error fetching products:", error));
    });
}

// JavaScript to handle the form submission and show the modal
document
  .getElementById("checkout-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
    var myModal = new bootstrap.Modal(document.getElementById("thankYouModal"));
    myModal.show(); // Show the thank you modal

    // You might want to include actual form submission logic here,
    // or redirect the user after showing the modal.
    // For example, after a delay, you might redirect or close the modal.
    setTimeout(() => {
      myModal.hide();
      // Redirect to another page or refresh the page
      // window.location.href = 'some-other-page.html';
    }, 3000); // Adjust time as needed
  });
