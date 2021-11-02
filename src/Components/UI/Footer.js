import React from "react";
import logo from "../../Assets/Img/logo.png";

const Footer = () => {
  return (
    <div>
      <footer class="text-center text-lg-start bg-light text-muted">
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div class="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div class="footerItems">
            <a href="" class="me-4 text-reset">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-whatsapp"></i>
            </a>

            <a href="" class="me-4 text-reset">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </section>
        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  <p>Jonny's Bakery</p>
                </h6>

                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
                <img
                  class="footerLogo"
                  height="110"
                  alt=""
                  loading="lazy"
                  src={logo}
                ></img>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" class="text-reset">
                    Cakes
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Cupcakes
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Bread
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Ecuadorian Goods
                  </a>
                </p>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" class="text-reset">
                    Gallery
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    About
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Products
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Contact
                  </a>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i class="fas fa-home me-3"></i>
                  Charlotte, NC
                </p>
                <p>
                  <i class="fas fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p>
                  <i class="fas fa-phone me-3"></i>
                  +1(704)-712-3369
                </p>
              </div>
            </div>
          </div>
        </section>

        <div class="copyright text-center p-4">
          © 2021 Copyright :
          <a class="text-reset fw-bold" href="https://mdbootstrap.com/">
            {" "}
            Jonny's Bakery
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
