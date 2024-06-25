const createFooter = () => {
  let footer = document.querySelector("footer");

  footer.innerHTML = `
  <div class="footer-container">
  <div class="row">
      <div class="logo">
          <img src="../logo.png" alt="Hiyas Flower Shop Logo" />
      </div>
      <div class="footer-col">
          <h4>CONTACT US</h4>
          <ul>
              <li>
                  <a href="/FOOTER/google.html">
                      Address: 2768 Durian St Resettlement Kalawaan Pasig City<br>
                  </a>
                  <a href="/FOOTER/google.html" class="spacing">
                      Mobile: (+63) 09063985449 Telephone: (632) 8881-6731 / 8579-3073
                  </a>
              </li>
          </ul>
      </div>
      <div class="footer-col">
          <h4>INFORMATION</h4>
          <ul>
              <li><a href="/FOOTER/DeliveryInformation.html">Delivery Information</a></li>
              <li><a href="/FOOTER/Howtoorder.html">How To Order</a></li>
              <li><a href="/FOOTER/Payment-Term.html">Payment Terms / Payment Instructions</a></li>
              <li><a href="/FOOTER/Privacy.html">Privacy Policy</a></li>
              <li><a href="/FOOTER/Terms&Condition.html">Terms & Conditions</a></li>
          </ul>
      </div>
      <div class="footer-col">
          <h4>CUSTOMER SERVICE</h4>
          <ul>
              <li><a href="/FOOTER/Contact.html">Contact Us</a></li>
          </ul>
      </div>
      <div class="footer-col">
          <h4 class="follow">FOLLOW US</h4>


          <div class="social-links">
              <a href="https://www.facebook.com/profile.php?id=61558070805899&mibextid=LQQJ4d"
                  class="facebook"><i class="fab fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/hiyasflowershop_?igsh=MWlodjJsaGp2ZmhheQ%3D%3D&utm_source=qr&fbclid=IwAR1cz5fQiFODMVvoaYEmghjnu6ehVM43FyMEFOj2PXKwJFCivDvsBCUU_yc"
                  class="instagram"><i class="fab fa-instagram"></i></a>

              <a href="https://www.tiktok.com/@hiyasflowershop_?_t=8lZvTKOKj96&_r=1&fbclid=IwAR2Z90TekWQ3p2eJw-T1pjRDcEHZIViws8-XqmZ6ATNhxDjsrR8yHxIIdEk"
                  class="tiktok"><i class="fab fa-tiktok"></i></a>
              <a href="https://www.lazada.com.ph/shop/shebyy?dsource=share&laz_share_info=984885272_5_3000_0_984885272_null&laz_token=5e25440740b9e312fca4acd364c41e63&exlaz=e_7MiEM65zW3HGip8qo24MCZFmNCmP6gU%2FnnWa525VocjCXvTKdNAtBU7L8axQDWNERCxiM%2Fsqh17lu40WY6EhSs3Nio6kf2U4D3WnASIas1Y%3D&sub_aff_id=social_share&sub_id2=984885272&sub_id6=CPI_EXLAZ"
                  class="lazada">Lazada<i class="fas fa-shopping-cart"></i></a>
              <a href="https://shopee.ph/hiyas7" class="shopee">Shoppe<i class="fas fa-shopping-cart"></i></a>
          </div>

      </div>

  </div>
</div>
</div>
</div>
</div>
    `;
};

createFooter();
