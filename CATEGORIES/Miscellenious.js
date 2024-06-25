document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".search-bar2 input");
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
    const options = optionsList.querySelectorAll(".option2");

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
      "Enternal Flower": [
        {
          name: "Enternal Rose",
          price: "₱1199",
          image: "./ITEMS/52.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Eternal-Rose/Eternal-Rose.html",
        },
        {
          name: "Led Light Rose",
          price: "₱1199",
          image: "ITEMS/53.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Led-Light-Rose/Led-Light-Rose.html",
        },
        {
          name: "Enchanted Rose",
          price: "₱1199",
          image: "ITEMS/51.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Enchanted-Rose/Enchanted-Rose.html",
        },
      ],
      "Add-ons": [
        {
          name: "Birthday Ballons",
          price: "₱299",
          image: "ITEMS/42.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Birthday-Ballons/Birthday-Ballons.html",
        },
        {
          name: "143 Ballons",
          price: "₱299",
          image: "ITEMS/41.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/143-Ballons/143-Ballons.html",
        },
        {
          name: "Yellow Bear",
          price: "₱1199",
          image: "ITEMS/37.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Yellow-Bear/Yellow-Bear.html",
        },
        {
          name: "Happy Bear",
          price: "₱1199",
          image:
            "/ /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/ITEMS/36.png",
          rating: "4.9",
        },

        {
          name: "Heart",
          price: "₱1299",
          image: "ITEMS/35.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Heart/Heart.html",
        },
        {
          name: "Kisses",
          price: "₱1299",
          image: "ITEMS/33.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Kisses/Kisses.html",
        },
        {
          name: "Giant Toblerone",
          price: "₱1299",
          image: "ITEMS/32.png",
          rating: "4.9",
          href: "/ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Giant-Toblerone/Giant-Toblerone.html",
        },
        {
          name: "Ferrero Box",
          price: "₱1299",
          image: "ITEMS/31.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Ferrero-Chocolate/FerreroChocolate.html",
        },
      ],

      "₱299": [
        {
          name: "Birthday Ballons",
          price: "₱299",
          image: "ITEMS/42.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Birthday-Ballons/Birthday-Ballons.html",
        },
        {
          name: "143 Ballons",
          price: "₱299",
          image: "ITEMS/41.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/143-Ballons/143-Ballons.html",
        },
      ],
      "₱1199": [
        {
          name: "Enternal Rose",
          price: "₱1199",
          image: "ITEMS/52.png",
          rating: "4.9",
          href: "/ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Eternal-Rose/Eternal-Rose.html",
        },
        {
          name: "Led Light Rose",
          price: "₱1199",
          image: "ITEMS/53.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Enchanted-Rose/Enchanted-Rose.html",
        },
        {
          name: "Enchanted Rose",
          price: "₱1199",
          image: "ITEMS/51.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Led-Light-Rose/Led-Light-Rose.html",
        },
        {
          name: "Yellow Bear",
          price: "₱1199",
          image: "ITEMS/37.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Yellow-Bear/Yellow-Bear.html",
        },
        {
          name: "Happy Bear",
          price: "₱1199",
          image: "ITEMS/36.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Happy-Bear/Happy-Bear.html",
        },
      ],
      "₱1299": [
        {
          name: "Heart",
          price: "₱1299",
          image: "ITEMS/35.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Heart/Heart.html",
        },
        {
          name: "Kisses",
          price: "₱1299",
          image: "ITEMS/33.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Kisses/Kisses.html",
        },
        {
          name: "Giant Toblerone",
          price: "₱1299",
          image: "ITEMS/32.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Giant-Toblerone/Giant-Toblerone.html",
        },
        {
          name: "Ferrero Box",
          price: "₱1299",
          image: "ITEMS/31.png",
          rating: "4.9",
          href: "/ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Ferrero-Chocolate/FerreroChocolate.html",
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
                &nbsp;&nbsp; &nbsp;&nbsp;   <del class="text-xs whitespace-nowrap" style="color: gray">₱1,399</del>
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
