const makeNavHeader = () => {
  let navHeaderElement = document.querySelector('.header-container');
  navHeaderElement.innerHTML = `
    <div class="header-container">
        <header class="sticky">
          <img
            class="header-logo"
            src="./../assets/apna-5.PNG"
            alt="header_logo"
          />
          <a href="./../../index.html" class="logo head-2">Apna Shop </a>

          <div class="toggle" onclick="toggleMenu();"></div>
          <ul class="menu">
            <li>
              <a
                class="text-3"
                onclick="toggleMenu();"
                href="./../../index.html"
                >Home</a
              >
            </li>
            <li>
              <a class="text-3" onclick="toggleMenu();" href="./filterPage.html"
                >Shop Now</a
              >
            </li>
          </ul>
          <ul class="menu hide">
            <li>
              <a
                onclick="toggleMenu();"
                class="text-1"
                href="./../Avatar/avatar.html"
                >Avatar</a
              >
            </li>
            <li>
              <a
                onclick="toggleMenu();"
                class="text-1"
                href="./../Alert/Alert.html"
                >Alert</a
              >
            </li>
          </ul>

          <ul class="menu left_auto">
            <!--- Input with Icon -->
            <div class="custom-input-one mar-y-2">
              <input
                id="name"
                type="text"
                class="input-field"
                autocomplete="off"
                placeholder=" "
              />
              <span
                class="iconify icons text-2"
                data-icon="ant-design:search-outlined"
              ></span>
              <label for="name" class="input-label text-2">Name</label>
            </div>
            <li>
              <a href="#">
                <div class="badge-div">
                  <span
                    class="iconify"
                    data-icon="healthicons:ui-user-profile"
                  ></span>
                  <div class="text-2">Vrushabh</div>
                </div>
              </a>
            </li>
            <li>
              <a href="./../pages/wishlistPage.html">
                <div class="badge-div">
                  <span
                    class="iconify"
                    data-icon="icon-park-outline:like"
                  ></span>
                  <div class="notify-badge"><span>06</span></div>
                  <div class="text-2">Wishlist</div>
                </div>
              </a>
            </li>
            <li>
              <a href="./../pages/Cart.html">
                <div class="badge-div">
                  <span class="iconify" data-icon="bi:cart-check"></span>
                  <div class="notify-badge"><span>06</span></div>
                  <div class="text-2">Cart</div>
                </div>
              </a>
            </li>
          </ul>
        </header>
    </div>
      `;
}
makeNavHeader();