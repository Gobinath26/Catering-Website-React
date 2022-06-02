import "../styles/menu.css";

export default function Menu() {
  return (
    <section id="menu">
      <div class="container" id="menu-container">
        <div class="row">
          <div class="col-lg-6">
            <div class="menu-right-container">
              <h1 class="menu-title">Our Menu</h1>
              <h5 class="menu-subtitle">Bread Basket</h5>
              <p class="menu-para">
                Assortment of fresh baked fruit breads and muffins 5.50
              </p>
              <h5 class="menu-subtitle">Honey Almond Granola with Fruits</h5>
              <p class="menu-para">
                Natural cereal of honey toasted oats, raisins, almonds and dates
                7.00
              </p>
              <h5 class="menu-subtitle">Belgian Waffle</h5>
              <p class="menu-para">
                Vanilla flavored batter with malted flour 7.50
              </p>
              <h5 class="menu-subtitle">Scrambled eggs</h5>
              <p class="menu-para">
                Scrambled eggs, roasted red pepper and garlic, with green onions
                7.50
              </p>
              <h5 class="menu-subtitle">Blueberry Pancakes</h5>
              <p class="menu-para">
                With syrup, butter and lots of berries 8.50
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="menu-img-container">
              <img
                src="https://www.w3schools.com/w3images/tablesetting.jpg"
                class="img-fluid menu-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
