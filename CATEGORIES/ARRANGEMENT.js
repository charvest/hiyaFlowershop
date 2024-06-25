document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".search-bar input");
  const productGrid = document.querySelector(".product-container");
  let activeCategory = "";
  let prevSearchValue = "";
  let prevCategory = "";
  let savedSearches = {};

  initSelectMenu(".select-menu");
  initSelectMenu(".select-menu1");

  function initSelectMenu(selector) {
    const menu = document.querySelector(selector);
    const select = menu.querySelector(".select");
    const selectText = select.firstChild; // Assuming the text node is the first child of the .select element
    const optionsList = menu.querySelector(".options-list");
    const options = optionsList.querySelectorAll(".option");

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
  }

  function loadProducts(bouquetType) {
    const products = getProductsForBouquetType(bouquetType);
    displayProducts(products);
  }

  function getProductsForBouquetType(bouquetType) {
    const productsData = {
      "Rose Bouquet": [
        {
          name: "Purple Daisy Rose",
          price: "₱1399",
          image: "ITEMS/1.png",
          rating: "4.9",
          href: "/ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART//PurpleDaisy/PurpleDaisy.html",
        },
        {
          name: "Velvet Violet",
          price: "₱1399",
          image: "ITEMS/2.png",
          rating: "4.9",
          href: "/ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Velvet-Violet/Velvet-Violet.html",
        },
        {
          name: "Blooming Bouquet",
          price: "₱1399",
          image: "ITEMS/3.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Blooming-Bouquet/Blooming-Bouquet.html",
        },
        {
          name: "Sweet Rose",
          price: "₱1399",
          image: "ITEMS/4.png",
          rating: "4.8",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Sweet-Rose/Sweet-rose.html",
        },
        {
          name: "Love-Melody",
          price: "₱1399",
          image: "ITEMS/6.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Love-Melody/Love-melody.html",
        },
        {
          name: "Romantic Red Roses",
          price: "₱1999",
          image: "ITEMS/5.png",
          rating: "4.8",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Romantic-Red-Roses/Romantic Red Roses.html",
        },
      ],
      "Tulips Bouquet": [
        {
          name: "Elegant Tulips",
          price: "₱1399",
          image: "ITEMS/26.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Elegant-Tulips/Elegant-Tulips.html",
        },
        {
          name: "Spring Time Tulips",
          price: "₱1999",
          image: "ITEMS/22.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Spring-Time Tulips/SpringTimeTulips.html",
        },
        {
          name: "Charm Bouquet",
          price: "₱1999",
          image: "ITEMS/23.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Charm-Bouquet/Charm-Bouquet.html",
        },
        {
          name: "Thisle Love",
          price: "₱1999",
          image: "ITEMS/24.png",
          rating: "4.9",
          href: "/ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Thistle Love/Thistle-Love.html",
        },
        {
          name: "Sweet But Dangerous",
          price: "₱1999",
          image: "ITEMS/25.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Sweet-But-Dangerous/Sweet-But-Dangerous.html",
        },
      ],
      "Sunflower Bouquet": [
        {
          name: "Sun Serenade Bouquet",
          price: "₱1399",
          image: "ITEMS/17.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Sunny-Serenade/Sunny-Serenades.html",
        },
        {
          name: "Sunshine Bouquet",
          price: "₱1399",
          image: "ITEMS/19.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Sunshine-Bouquet/Sunshine-Bouquet.html",
        },
        {
          name: "Sun-kissed Splendor",
          price: "₱1699",
          image: "ITEMS/18.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Sunkissed-Splendor/Sunkissed-Splendor.html",
        },

        {
          name: "Golden Glow Sunflower",
          price: "₱1699",
          image: "ITEMS/20.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Golden-Glow-Sunflower/GoldenGlow-Sunflower.html",
        },
        {
          name: "Sunflower Serenade",
          price: "₱1699",
          image: "ITEMS/21.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Sunflower-Serenade/Sunflower-Serenade.html",
        },
      ],
      "Carnation Bouquet": [
        {
          name: "Spray Roses",
          price: "1399",
          image: "ITEMS/12.png",
          rating: "4.5",
          href: "/ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Spray-roses/Sprayrose.html",
        },
        {
          name: "Flower Falls",
          price: "₱1399",
          image: "ITEMS/13.png",
          rating: "4.5",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Flowerfalls/Flowerfalls.html",
        },
        {
          name: "Love Sparkle",
          price: "₱1699",
          image: "ITEMS/14.png",
          rating: "4.5",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Love-Sparkle/Love-sparkle.html",
        },
      ],

      "₱1399": [
        {
          name: "Purple Daisy Rose",
          price: "₱1399",
          image: "ITEMS/1.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/PurpleDaisy/PurpleDaisy.html",
        },
        {
          name: "Velvet Violet",
          price: "₱1399",
          image: "ITEMS/2.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Velvet-Violet/Velvet-Violet.html",
        },
        {
          name: "Blooming Bouquet",
          price: "₱1399",
          image: "ITEMS/3.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Blooming-Bouquet/Blooming-Bouquet.html",
        },
        {
          name: "Sweet Rose",
          price: "₱1399",
          image: "ITEMS/4.png",
          rating: "4.8",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Sweet-Rose/Sweet-rose.html",
        },
        {
          name: "Love-Melody",
          price: "₱1399",
          image: "ITEMS/6.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Love-Melody/Love-melody.html",
        },
        {
          name: "Romantic Red Roses",
          price: "₱1999",
          image: "ITEMS/5.png",
          rating: "4.8",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Romantic-Red-Roses/Romantic Red Roses.html",
        },
        {
          name: "Elegant Tulips",
          price: "₱1399",
          image: "ITEMS/26.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Elegant-Tulips/Elegant-Tulips.html",
        },
        {
          name: "Sun Serenade Bouquet",
          price: "₱1399",
          image: "ITEMS/17.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Sunny-Serenade/Sunny-Serenades.html",
        },
        {
          name: "Sunshine Bouquet",
          price: "₱1399",
          image: "ITEMS/19.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Sunshine-Bouquet/Sunshine-Bouquet.html",
        },
        {
          name: "Spray Roses",
          price: "1399",
          image: "ITEMS/12.png",
          rating: "4.5",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Spray-roses/Sprayrose.html",
        },
      ],
      "₱1699": [
        {
          name: "Golden Glow Sunflower",
          price: "₱1699",
          image: "ITEMS/20.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Golden-Glow-Sunflower/GoldenGlow-Sunflower.html",
        },
        {
          name: "Sunflower Serenade",
          price: "₱1699",
          image: "ITEMS/21.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Sunflower-Serenade/Sunflower-Serenade.html",
        },
        {
          name: "Love Sparkle",
          price: "₱1699",
          image: "ITEMS/14.png",
          rating: "4.5",
          href: "/HIYAS FLOWERSHOP/ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Love-Sparkle/Love-sparkle.html",
        },
        {
          name: "Sun-kissed Splendor",
          price: "₱1699",
          image: "ITEMS/18.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Sunkissed-Splendor/Sunkissed-Splendor.html",
        },
      ],
      "₱1999": [
        {
          name: "Romantic Red Roses",
          price: "₱1999",
          image: "ITEMS/5.png",
          rating: "4.8",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Romantic-Red-Roses/Romantic Red Roses.html",
        },
        {
          name: "Spring Time Tulips",
          price: "₱1999",
          image: "ITEMS/22.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Spring-Time Tulips/SpringTimeTulips.html",
        },
        {
          name: "Bouquet Charm",
          price: "₱1999",
          image: "ITEMS/23.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Charm-Bouquet/Charm-Bouquet.html",
        },
        {
          name: "Thisle Love",
          price: "₱1999",
          image: "ITEMS/24.png",
          rating: "4.9",
          href: " /ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Thistle Love/Thistle-Love.html",
        },
        {
          name: "Sweet But Dangerous",
          price: "₱1999",
          image: "ITEMS/25.png",
          rating: "4.9",
          href: "/ITEM NO ADD TO CART-20240502T170722Z-001/ITEM NO ADD TO CART/Sweet-But-Dangerous/Sweet-But-Dangerous.html",
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
