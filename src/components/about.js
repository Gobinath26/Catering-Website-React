import "../styles/about.css";

export default function About() {
  return (
    <section id="about">
      <div class="container" id="about-container">
        <div class="row">
          <div class="col-lg-6">
            <div class="about-img-container">
              <img
                src="https://www.w3schools.com/w3images/tablesetting2.jpg"
                class="img-fluid about-image"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="about-left-container">
              <h1 class="about-title">About Catering</h1>
              <h5 class="about-subtitle">Tradition since 1889</h5>
              <p class="about-para1">
                The Catering was founded in blabla by Mr. Smith in lorem ipsum
                dolor sit amet, consectetur adipiscing elit consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute iruredolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.We only use
                seasonal ingredients.
              </p>
              <p class="about-para2">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum consectetur
                adipiscing elit, sed do eiusmod temporincididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
