document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".search-bar1 input");
  const productGrid = document.querySelector(".product-container1");
  let activeCategory = "";
  let prevSearchValue = "";
  let prevCategory = "";
  let savedSearches = {};

  initSelectMenu(".select-menu4");
  initSelectMenu(".select-menu5");

  function initSelectMenu(selector) {
    const menu = document.querySelector(selector);
    const select = menu.querySelector(".select");
    const selectText = select.firstChild; // Assuming the text node is the first child of the .select element
    const optionsList = menu.querySelector(".options-list1");
    const options = optionsList.querySelectorAll(".option1");

    select.addEventListener("click", () => {
      optionsList.classList.toggle("active");
      select.querySelector(".fas").classList.toggle("fa-angle-up");
    });

    options.forEach((option) => {
      option.addEventListener("click", () => {
        options.forEach((opt) => opt.classList.remove("selected"));
        option.classList.add("selected");
        activeCategory = option.textContent.trim();
        optionsList.classList.remove("active");
        select.querySelector(".fas").classList.toggle("fa-angle-up");
        loadProducts(activeCategory);
        searchInput.value = savedSearches[activeCategory] || "";
        filterCards(savedSearches[activeCategory] || "");
      });
    });
  }

  function filterCards(searchValue) {
    const cards = productGrid.querySelectorAll(".card");
    let resultCount = 0;
    cards.forEach((card) => {
      const productName = card
        .querySelector(".name h5")
        .textContent.toLowerCase();
      const productCategory = card.getAttribute("data-category");
      const matchesCategory =
        productCategory === activeCategory.toLowerCase().replace(/\s+/g, "-");
      const matchesSearch = productName.includes(searchValue);
      if (matchesCategory && matchesSearch) {
        card.style.display = "";
        resultCount++;
      } else {
        card.style.display = "none";
      }
    });

    const noResultMessage = productGrid.querySelector(".no-result");
    if (resultCount === 0 && searchValue !== "") {
      noResultMessage.style.display = "block";
    } else {
      noResultMessage.style.display = "none";
    }
  }

  function loadProducts(bouquetType) {
    const products = getProductsForBouquetType(bouquetType);
    displayProducts(products);
  }

  function getProductsForBouquetType(bouquetType) {
    const productsData = {
      "Anniversary Bouquet": [
        {
          name: "Violet Vault",
          price: "₱1399",
          image: "ITEMS/7.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Violet-vault/violet-vault.html",
        },
        {
          name: "Poeny Rose",
          price: "₱1399",
          image: "ITEMS/8.png",
          rating: "4.9",
          href: "/ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Poeny Rose/Poeny-Rose.html",
        },
        {
          name: "Sweet Blooms",
          price: "₱1699",
          image: "ITEMS/9.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Sweet-Rose/Sweet-rose.html",
        },
      ],
      "Mother's Day": [
        {
          name: "Sun Blush",
          price: "₱1399",
          image: "ITEMS/44.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Sunblush/Sunblush.html",
        },
        {
          name: "Autumn Bouquet",
          price: "₱1399",
          image: "ITEMS/45.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Autumn-Bouquet/Autumn-Bouquet.html",
        },
        {
          name: "Bouquet Charm",
          price: "₱1399",
          image: "ITEMS/27.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Bouquet-Charm/Bouquet-Charm.html",
        },
      ],
      "Valentine's Day": [
        {
          name: "Spark of Love",
          price: "₱1399",
          image: "ITEMS/29.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Spark-of-Love/Spark-of-Love.html",
        },
        {
          name: "Autumn Bouquet",
          price: "₱1699",
          image: "ITEMS/45.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Autumn-Bouquet/Autumn-Bouquet.html",
        },
        {
          name: "Little Bear",
          price: "₱1699",
          image: "ITEMS/39.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Little-Bear/Little-Bear.html",
        },
      ],
      Funeral: [
        {
          name: "In Loving Memory",
          price: "₱3000",
          image: "ITEMS/46.png",
          rating: "4.5",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/In-Loving-Memories/In-Loving-Memories.html",
        },
        {
          name: "Enternal Greace Wreath",
          price: "₱3000",
          image: "ITEMS/47.png",
          rating: "4.5",
          href: " ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Enternal Greace Wreath/Enternal Greace Wreath.html",
        },
        {
          name: "Comporting Embrance",
          price: "₱3000",
          image: "ITEMS/48.png",
          rating: "4.5",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Comporting-Embrace/Comporting-Embrace.html",
        },
      ],

      "₱1399": [
        {
          name: "Violet Vault",
          price: "₱1399",
          image: "ITEMS/7.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Violet-vault/violet-vault.html",
        },
        {
          name: "Poeny Rose",
          price: "₱1399",
          image: "ITEMS/8.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Poeny Rose/Poeny-Rose.html",
        },
        {
          name: "Sun Blush",
          price: "₱1399",
          image: "ITEMS/44.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Sunblush/Sunblush.html",
        },
        {
          name: "Autumn Bouquet",
          price: "₱1399",
          image: "ITEMS/45.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Autumn-Bouquet/Autumn-Bouquet.html",
        },
        {
          name: "Bouquet Charm",
          price: "₱1399",
          image: "ITEMS/27.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Bouquet-Charm/Bouquet-Charm.html",
        },
        {
          name: "Spark of Love",
          price: "₱1399",
          image: "ITEMS/29.png",
          rating: "4.9",
          href: "/ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Spark-of-Love/Spark-of-Love.html",
        },
      ],
      "₱1699": [
        {
          name: "Sweet Blooms",
          price: "₱1699",
          image: "ITEMS/9.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Sweet-Rose/Sweet-rose.html",
        },

        {
          name: "Little Bear",
          price: "₱1699",
          image: "ITEMS/39.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Little-Bear/Little-Bear.html",
        },
      ],
      "₱3000": [
        {
          name: "In Loving Memory",
          price: "₱3000",
          image: "ITEMS/46.png",
          rating: "4.5",
          href: "/ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/In-Loving-Memories/In-Loving-Memories.html",
        },
        {
          name: "Enternal Greace Wreath",
          price: "₱3000",
          image: "ITEMS/47.png",
          rating: "4.5",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Enternal Greace Wreath/Enternal Greace Wreath.html",
        },
        {
          name: "Comporting Embrance",
          price: "₱3000",
          image: "ITEMS/48.png",
          rating: "4.5",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Comporting-Embrace/Comporting-Embrace.html",
        },
      ],
    };

    return productsData[bouquetType] || [];
  }

  function displayProducts(products) {
    let productsHtml = "";
    if (products.length === 0) {
      productsHtml =
        '<p class="no-result" style="text-align: center; display: block;">No results found</p>';
    } else {
      productsHtml = products
        .map((product) => {
          return `
          <div class="card" data-category="${activeCategory
            .toLowerCase()
            .replace(/\s+/g, "-")}" style="display: block;">
            <a href="${product.href || "#"}"><img src="${product.image}" alt="${
            product.name
          }" /></a>
            <div class="card-body">
            <div class="name" style="color: black;"><h5><a href="${
              product.href || "#"
            }" style="text-decoration: none; color: black;">${
            product.name
          }</a></h5></div>
              <div class="description">
                <span class="price" style="color: rgb(240, 151, 151)">${
                  product.price
                }</span>
                &nbsp;&nbsp; &nbsp;&nbsp;   <del class="text-xs whitespace-nowrap" style="color: gray">₱2,399</del>
                <i class="fa fa-star checked"></i>
                <span class="mx-1">${product.rating}</span>
              </div>
            </div>
          </div>`;
        })
        .join("");
    }

    productGrid.innerHTML = productsHtml;
  }

  // Search function
  searchInput.addEventListener("input", function () {
    const searchValue = this.value.toLowerCase();
    if (searchValue === prevSearchValue && activeCategory === prevCategory)
      return;
    filterCards(searchValue);
    prevSearchValue = searchValue;
    prevCategory = activeCategory;
    savedSearches[activeCategory] = searchValue;
  });
});
