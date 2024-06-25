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
          <a href="/landingpage.html"><i class="fa-solid fa-house"></i>HOME</a>
        </li>
        <li>
          <a href="/hiyas_user_login/user_login.html"
            ><i class="fa fa-user" aria-hidden="true"></i>LOGIN/SIGNUP</a
          >
        </li>
    
        <li>
        <a href="/CATEGORIES/Occasion.html"
          ><i class="fa-solid fa-list"></i>OCCASIONS</a
        >
      </li>
      <li>
        <a href="/CATEGORIES/ARRANGEMENT.html"
          ><i class="fa-solid fa-list"></i>ARRANGEMENTS</a
        >
      </li>
      <li>
        <a href="/CATEGORIES/Miscellenious.html"
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
    <li><a href="/landingpage.html">Home</a></li>
      <li><a href="./Occasion.html">Occasions</a></li>
      <li><a href="./ARRANGEMENT.html">Arrangements</a></li>
    </div>
    <div class="navbar-logo">
      <img src="./ITEMS/logos.png" alt="Logo" />
    </div>
    <div class="navbar-links-right">
      <li><a href="./Miscellenious.html">Miscellaneous</a></li>
      <li><a href="/landingpage.html">Reviews</a></li>
      <li><a href="/landingpage.html">Blog</a></li>
    </div>
    
    
    <button class="sidebar-toggle">☰</button>
    
    </div>
      `;
};

createNav();
