import "../../Assets/Styles/style.css";

const HomePage = () => {
  return (
    <>
      <div class="landingSection">
        <div class="landingLine">
          <div class="leftLine"></div>
          <h4 class="landingSub">Baking since 2013</h4>
          <div class="rightLine"></div>
        </div>
        <h1 class="landingTitle">
          Order at Johnny's Bakery <br></br>Today!
        </h1>
        <div class="buttonCol">
          <button type="button" class="btn landingButton btn-primary me-3">
            Order Today
          </button>
        </div>
      </div>

      <div id="gallery" class="offersSection">
        <div class="offerCol">
          <h1 class="offerTitle">OUR BESTSELLERS</h1>
          <p class="offerText">
          Here you can use rows and columns to organize your footer content. Lorem ipsum dolor <br></br>sit amet, consectetur adipisicing elit.
          </p>
          <a id="offerTag" href="#product">
            SEE MORE
          </a>
          <div class="offerRow">
            <div class="offerItem">
              <img
                class="offerImg"
                alt="BakeryItem"
                src="https://t3.ftcdn.net/jpg/04/58/63/68/360_F_458636898_VkwBvRxFHmNxogB155m7EXjAZdZ80MZH.jpg"
              ></img>
              <h5 class="itemTitle">ITEM NAME</h5>
            </div>
            <div class="offerItem">
              <img
                class="offerImg"
                alt="BakeryItem"
                src="https://t3.ftcdn.net/jpg/04/58/63/68/360_F_458636898_VkwBvRxFHmNxogB155m7EXjAZdZ80MZH.jpg"
              ></img>
              <h5 class="itemTitle">ITEM NAME</h5>
            </div>
            <div class="offerItem">
              <img
                class="offerImg"
                alt="BakeryItem"
                src="https://t3.ftcdn.net/jpg/04/58/63/68/360_F_458636898_VkwBvRxFHmNxogB155m7EXjAZdZ80MZH.jpg"
              ></img>
              <h5 class="itemTitle">ITEM NAME</h5>
            </div>
            <div class="offerItem">
              <img
                class="offerImg"
                alt="BakeryItem"
                src="https://t3.ftcdn.net/jpg/04/58/63/68/360_F_458636898_VkwBvRxFHmNxogB155m7EXjAZdZ80MZH.jpg"
              ></img>
              <h5 class="itemTitle">ITEM NAME</h5>
            </div>
          </div>
        </div>
      </div>
      <div id="about" class="contentRow">
        <div class="contentColImg"></div>
        <div class="contentColInfo">
          <h1 class="contentTitle">Maria Sanchez</h1>
          <p class="offerText width">
          Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <button id="abtBtn" type="button" class="btn left btn-primary">
            Contact Us
          </button>
        </div>
      </div>

      <div class="contentRow">
        <div class="contentColInfo right">
          <h1 class="contentTitle">Jonny Sanchez</h1>
          <p class="offerText width">
          Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <button id="abtBtn" type="button" class="btn left btn-primary">
            Contact Us
          </button>
        </div>
        <div class="contentColImg"></div>
      </div>

      <div class="whyUs">
          <div class="whyUsCol">
              <h1 class="whyTitle">Why Jonny's Bakery</h1>
              <div class="whyUsRow">
                  <div class="whyItem">
                    <i class="fas fa-birthday-cake fa-3x whyIcon"></i>
                    <h5 class="whyInfo">ONE-OF-A-KIND TREATS</h5>
                    <p class="whyInfo">Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </div>
                  <div class="whyItem">
                    <i class="fas fa-box fa-3x whyIcon"></i>
                    <h5 class="whyInfo">ONE-OF-A-KIND TREATS</h5>
                    <p class="whyInfo">Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </div>                  
                  <div class="whyItem">
                    <i class="fas fa-calendar fa-3x whyIcon"></i>
                    <h5 class="whyInfo">ONE-OF-A-KIND TREATS</h5>
                    <p class="whyInfo">Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </div>
              </div>
          </div>
      </div>

      <div class="containerThing">
        <div class="containerOffset right">
          <h1 class="containerTitle">AUTHENTIC PASTRIES.</h1>
          <p class="containerInfo"> Here you can use rows and columns to organize your footer content.<br></br> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <button id="abtBtn" type="button" class="btn left btn-primary">
            Contact Us
          </button>
        </div>
      </div>

      <div id="product" class="offersSection">
        <div class="offerCol">
          <h1 class="offerTitle">OUR BESTSELLERS</h1>
          <p class="offerText">
          Here you can use rows and columns to organize your footer content. Lorem ipsum dolor <br></br>sit amet, consectetur adipisicing elit.
          </p>
          <a id="offerTag" href="#product">
            SEE MORE
          </a>
          <div class="offerRow">
            <div class="offerItem">
              <img
                class="offerImg"
                alt="BakeryItem"
                src="https://t3.ftcdn.net/jpg/04/58/63/68/360_F_458636898_VkwBvRxFHmNxogB155m7EXjAZdZ80MZH.jpg"
              ></img>
              <h5 class="itemTitle">ITEM NAME</h5>
            </div>
            <div class="offerItem">
              <img
                class="offerImg"
                alt="BakeryItem"
                src="https://t3.ftcdn.net/jpg/04/58/63/68/360_F_458636898_VkwBvRxFHmNxogB155m7EXjAZdZ80MZH.jpg"
              ></img>
              <h5 class="itemTitle">ITEM NAME</h5>
            </div>
            <div class="offerItem">
              <img
                class="offerImg"
                alt="BakeryItem"
                src="https://t3.ftcdn.net/jpg/04/58/63/68/360_F_458636898_VkwBvRxFHmNxogB155m7EXjAZdZ80MZH.jpg"
              ></img>
              <h5 class="itemTitle">ITEM NAME</h5>
            </div>
            <div class="offerItem">
              <img
                class="offerImg"
                alt="BakeryItem"
                src="https://t3.ftcdn.net/jpg/04/58/63/68/360_F_458636898_VkwBvRxFHmNxogB155m7EXjAZdZ80MZH.jpg"
              ></img>
              <h5 class="itemTitle">ITEM NAME</h5>
            </div>
          </div>
        </div>
      </div>

      <div id="contact" class="contactContainer">
          <h1 class="contactTitle">Wanna place an order? Please let us know 3 days in advance!</h1>
          <p class="contactText">Call us at <span class="colorText">+1(704)-620-8005</span> to place your order today!</p>
      </div>
    </>
  );
};

export default HomePage;
