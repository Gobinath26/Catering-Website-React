import "../styles/contact.css";

export default function Contact() {
  return (
    <section id="contact">
      <div class="container" id="contact-container">
        <div class="row">
          <div class="col-lg-12">
            <h1 class="contact-title">Contact</h1>
            <p class="contact-para">
              We offer full-service catering for any event, large or small. We
              understand your needs and we will cater the food to satisfy the
              biggerst criteria of them all, both look and taste. Do not
              hesitate to contact us.
            </p>
            <h5 class="contact-subtitle">
              Catering Service, 42nd Living St, 43043 New York, NY
            </h5>
            <p class="contact-para">
              You can also contact us by phone 00553123-2323 or email
              catering@catering.com, or you can send us a message here:
            </p>
            <form>
              <input
                type="text"
                class="form-control"
                placeholder="Name"
                required
              />
              <input
                type="number"
                class="form-control"
                placeholder="How Many People"
                required
              />
              <input
                type="datetime-local"
                class="form-control"
                placeholder="Date and Time"
                required
              />
              <input
                type="text"
                class="form-control"
                placeholder="Message \ Special requirements"
                required
              />
              <button type="submit" class="btn contact-button">
                SEND MESSAGE
              </button>
            </form>
            <footer>
              <p class="page-footer">Powered by Gobinath M</p>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
}
