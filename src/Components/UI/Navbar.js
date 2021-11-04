import React, {useState} from "react";

import navLogo from '../../Assets/Img/logo.png'
const Navbar = () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if(window.scrollY >= 80){
            setColorchange(true);
        }
        else{
            setColorchange(false);
        }
    }
window.addEventListener('scroll', changeNavbarColor);
  return (
      
    <div class="fixed-top">
      <nav class={colorChange ? 'navbar navbar-expand-lg navbar-light bg-light colorChange' : 'navbar fixed-top navbar-expand-lg navbar-light bg-light'}>
        <div class="container">
          <a class="navbar-brand me-2" href="#about">
            <img
              src={navLogo}
              height="70"
              alt=""
              loading="lazy"
            />
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars navIcon"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarButtonsExample">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a href="#about" class={colorChange ? 'nav-link navLogo navDark' : 'nav-link navLogo'}>
                  Jonny's Bakery
                </a>
              </li>
            </ul>

            <div class="d-flex align-items-center">
            
            <a href="#gallery" type="button" class={colorChange ? 'btn btn-link px-3 me-2 navItem navDark' : 'btn btn-link px-3 me-2 navItem'}>
                Gallery
              </a>
              <a href="#about" type="button" class={colorChange ? 'btn btn-link px-3 me-2 navItem navDark' : 'btn btn-link px-3 me-2 navItem'}>
                About
              </a>
              <a href="#product" type="button" class={colorChange ? 'btn btn-link px-3 me-2 navItem navDark' : 'btn btn-link px-3 me-2 navItem'}>
                Products
              </a>
              <a href="#contact">
              <button type="button" class="landingBtn btn btn-primary me-3">
                Contact Us
              </button>
              </a>
              <a
                class="btn btn-dark px-3"
                href="#contact"
                role="button"
              >
                <i class="fas fa-phone"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
