const createNav = () => {
  let nav = document.querySelector(".navbar");

  nav.innerHTML = `
  <div id="sidebar" class="sidebar">
  <!-- Sidebar content here -->
  <div class="menu">
    <header>MENU</header>
  </div>
  <ul>
    <li>
      <a href="landingpage.html"><i class="fa-solid fa-house"></i>HOME</a>
    </li>
    <li>
      <a href="./hiyas_user_login/user_login.html"
        ><i class="fa fa-user" aria-hidden="true"></i>LOGIN/SIGNUP</a
      >
    </li>

    <li>
      <a href="./CATEGORIES/Occasion.html"
        ><i class="fa-solid fa-list"></i>OCCASIONS</a
      >
    </li>
    <li>
      <a href="./CATEGORIES/ARRANGEMENT.html"
        ><i class="fa-solid fa-list"></i>ARRANGEMENTS</a
      >
    </li>
    <li>
      <a href="./CATEGORIES/Miscellenious.html"
        ><i class="fa-solid fa-list"></i>MISCELLANEOUS</a
      >
    </li>
    <li>
      <a href="/hiyas_user_login/user_login.html" class="logout"
        ><i class="fa-solid fa-list"></i>LOGOUT</a
      >
    </li>
  </ul>
</div>
<div class="navbar-links-left">
  <li><a href="CATEGORIES/landingpage.html">Home</a></li>
  <li><a href="CATEGORIES/Occasion.html">Occasions</a></li>
  <li><a href="CATEGORIES/ARRANGEMENT.html">Arrangements</a></li>
</div>
<div class="navbar-logo">
  <img src="images/logo.png" alt="Logo" />
</div>
<div class="navbar-links-right">
  <li><a href="CATEGORIES/Miscellenious.html">Miscellaneous</a></li>
  <li><a href="#reviews">Reviews</a></li>
  <li><a href="#blog-986">Blog</a></li>
</div>
<i class="bx bx-shopping-bag" id="cart-icon"></i>

<button class="sidebar-toggle">☰</button>
<!-- cart -->
<div class="cart">
  <h2 class="cart-title">Shopping Cart</h2>

  <div class="cart-content"></div>
  <!-- total -->
  <div class="total">
    <div class="total-title">Total</div>
    <div class="total-price">₱0</div>
  </div>
  <!-- buy button -->
  <a href="./hiyas_payment/hiyas_checkout.html"
    ><button type="button" class="btn-buy">
      <span class="transition"></span>
      <span class="gradient"></span>
      <span class="label">BUY NOW</span>
    </button></a
  >
  <!-- cart close -->
  <i class="bx bx-x" id="close-cart"></i>
</div>
    `;
};

createNav();
