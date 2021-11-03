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
            Treats that change the way you think about dessert. Think layer
            cakes with unfrosted <br></br>sides, gooey pie, and fudgy Cake
            Truffles. Don't be shy—give ‘em a try.
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
          <h1 class="contentTitle">BIRTHDAY ESSENTIALS DELIVERED.</h1>
          <p class="offerText width">
            Brand new party kits for the ultimate birthday of any size. Skip the
            party store, order the cake and the decorations to your door.
          </p>
          <button id="abtBtn" type="button" class="btn left btn-primary">
            Contact Us
          </button>
        </div>
      </div>

      <div class="contentRow">
        <div class="contentColInfo right">
          <h1 class="contentTitle">CHRISTINA TOSI WROTE A CHILDREN’S BOOK!</h1>
          <p class="offerText width">
            Brand new party kits for the ultimate birthday of any size. Skip the
            party store, order the cake and the decorations to your door.
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
                    <p class="whyInfo">Try our award-winning classic Birthday Cake and our fan-favorite B’Day Cake Truffles!</p>
                  </div>
                  <div class="whyItem">
                    <i class="fas fa-box fa-3x whyIcon"></i>
                    <h5 class="whyInfo">ONE-OF-A-KIND TREATS</h5>
                    <p class="whyInfo">Try our award-winning classic Birthday Cake and our fan-favorite B’Day Cake Truffles!</p>
                  </div>                  
                  <div class="whyItem">
                    <i class="fas fa-calendar fa-3x whyIcon"></i>
                    <h5 class="whyInfo">ONE-OF-A-KIND TREATS</h5>
                    <p class="whyInfo">Try our award-winning classic Birthday Cake and our fan-favorite B’Day Cake Truffles!</p>
                  </div>
              </div>
          </div>
      </div>

      <div class="containerThing">
        <div class="containerOffset right">
          <h1 class="containerTitle">AUTHENTIC PASTRIES.</h1>
          <p class="containerInfo"> Brand new party kits for the ultimate birthday of any size. <br></br>Skip the
            party store, order the cake and the decorations to your door.</p>
          <button id="abtBtn" type="button" class="btn left btn-primary">
            Contact Us
          </button>
        </div>
      </div>

      <div id="product" class="offersSection">
        <div class="offerCol">
          <h1 class="offerTitle">OUR BESTSELLERS</h1>
          <p class="offerText">
            Treats that change the way you think about dessert. Think layer
            cakes with unfrosted <br></br>sides, gooey pie, and fudgy Cake
            Truffles. Don't be shy—give ‘em a try.
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
