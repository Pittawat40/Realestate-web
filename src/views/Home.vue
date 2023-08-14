<script>
import { ref } from "vue";

export default {
  setup() {},
  created() {
    window.addEventListener("scroll", this.onScroll);
  },
  mounted() {
    this.toggleMenu();
  },
  methods: {
    toggleMenu() {
      const narbar = document.querySelector(".navbar");
      const bars = document.querySelector(".bars");
      const staggered = document.querySelector(".staggered");

      document.querySelector("#bars").onclick = () => {
        narbar.classList.toggle("active");
        bars.classList.toggle("active");
        staggered.classList.toggle("active");
      };

      document.querySelector("#staggered").onclick = () => {
        narbar.classList.toggle("active");
        bars.classList.toggle("active");
        staggered.classList.toggle("active");
      };
    },
    onScroll() {
      const narbar = document.querySelector(".navbar");
      const bars = document.querySelector(".bars");
      const staggered = document.querySelector(".staggered");
      narbar.classList.remove("active");
      bars.classList.remove("active");
      staggered.classList.remove("active");
    },
  },
};
</script>

<template>
  <header class="header">
    <a href="#" class="logo">a'property</a>
    <nav class="navbar">
      <a href="#home">Residencies</a>
      <a href="#value">Our value</a>
      <a href="#contact">Contact us</a>
      <a href="#start">Get started</a>
      <button class="btn">
        <a href="#">contact</a>
      </button>
    </nav>
    <a class="bars" id="bars"> <font-awesome-icon icon="bars" /></a>
    <a class="staggered" id="staggered">
      <font-awesome-icon icon="bars-staggered"
    /></a>
  </header>
  <div class="white"></div>

  <!-- section home -->
  <section class="home" id="home">
    <div class="container">
      <div class="left">
        <div class="title">
          <div class="cicle"></div>
          <h1>
            discover <br />
            most suitable <br />
            Property
          </h1>
        </div>
        <div class="description">
          <span>find a variety of properties that suit you very easilty</span>
          <span>forget all difficulties in finding a residencies for you</span>
        </div>
        <div class="search">
          <input type="text" />
          <button class="btn">search</button>
        </div>
        <div class="stats">
          <div class="col">
            <p>9000 <span>+</span></p>
            <p class="text">happy customer</p>
          </div>
          <div class="col">
            <p>2000 <span>+</span></p>
            <p class="text">favorite reels</p>
          </div>
          <div class="col">
            <p>50 <span>+</span></p>
            <p class="text">most product</p>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="img-container">
          <img src="src/assets/1.png" alt="" />
        </div>
      </div>
    </div>
  </section>
  <!-- section home -->

  <!-- section company -->
  <section class="company">
    <div class="container">
      <img src="src/assets/logo-5.svg" alt="" />
      <img src="src/assets/logo-1.png" alt="" />
      <img src="src/assets/logo-6.png" alt="" />
      <img src="src/assets/logo-4.png" alt="" />
    </div>
  </section>
  <!-- section company -->

  <!-- section residencies -->
  <section class="residencies">
    <div class="container">
      <div class="head">
        <span>best choices</span>
        <span>popular residencies</span>
        <div class="paginate">
          <div class="icon">
            <font-awesome-icon icon="chevron-left" />
          </div>
          <div class="icon">
            <font-awesome-icon icon="chevron-right" />
          </div>
        </div>
      </div>
      <div class="content">
        <div class="card">
          <img src="src/assets/home-1.jpeg" alt="" />
          <p><span>$</span>45,000</p>
          <p>aliva priva</p>
          <span>Ratchadaphisek Road, Huai Khwang, Bangkok 10310, Thailand</span>
        </div>
        <div class="card">
          <img src="src/assets/home-2.jpeg" alt="" />
          <p><span>$</span>90,000</p>
          <p>garden city</p>
          <span>Ratchadaphisek Road, Huai Khwang, Bangkok 10310, Thailand</span>
        </div>
        <div class="card">
          <img src="src/assets/home-3.jpeg" alt="" />
          <p><span>$</span>100,000</p>
          <p>siri vool</p>
          <span>Ratchadaphisek Road, Huai Khwang, Bangkok 10310, Thailand</span>
        </div>
      </div>
    </div>
  </section>
  <!-- section residencies -->

  <!-- section value -->
  <section class="value" id="value">
    <div class="container">
      <div class="left">
        <div class="img-container">
          <img src="src/assets/value.png" alt="" />
        </div>
      </div>
      <div class="right">
        <div class="content">
          <span>our value</span>
          <span>value we give to you</span>
          <span
            >we always ready to help by providing the best servrice for you
            <br />
            we belelive a good place to live can make your life better
          </span>
        </div>
        <div class="row">
          <div class="box">
            <span>best interest rates on the market</span>
            <font-awesome-icon icon="plus" />
          </div>
          <div class="box">
            <span>prevent unstable prices</span>
            <font-awesome-icon icon="plus" />
          </div>
          <div class="box">
            <span>best price on the markets</span>
            <font-awesome-icon icon="plus" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- section value -->

  <!-- section contact -->
  <section class="contact" id="contact">
    <div class="container">
      <div class="left">
        <div class="content">
          <span>our contact us</span>
          <span>easy to contact us</span>
          <span
            >we always ready to help by providing the best servrice for you
            <br />
            we belelive a good place to live can make your life better
          </span>
        </div>
        <div class="row">
          <div class="box">
            <div class="title">
              <a href="#"><font-awesome-icon icon="phone" /></a>
              <div class="text">
                <span>call</span>
                <span>011-2223334</span>
              </div>
            </div>
            <div class="button">call now</div>
          </div>
          <div class="box">
            <div class="title">
              <a href="#"><font-awesome-icon icon="comment" /></a>
              <div class="text">
                <span>chat</span>
                <span>011-2223334</span>
              </div>
            </div>
            <div class="button">chat now</div>
          </div>
          <div class="box">
            <div class="title">
              <a href="#"><font-awesome-icon icon="video" /></a>
              <div class="text">
                <span>video</span>
                <span>011-2223334</span>
              </div>
            </div>
            <div class="button">video now</div>
          </div>
          <div class="box">
            <div class="title">
              <a href="#"><font-awesome-icon icon="message" /></a>
              <div class="text">
                <span>message</span>
                <span>011-2223334</span>
              </div>
            </div>
            <div class="button">message now</div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="img-container">
          <img src="src/assets/contact.png" alt="" />
        </div>
      </div>
    </div>
  </section>
  <!-- section contact -->

  <!-- section start -->
  <section class="start" id="start">
    <div class="container">
      <h3>get started with A'PROPERTY</h3>
      <span>subscribe and find super attractive price quotes form us. </span>
      <span>find your residencies soon</span>
      <div class="button">get started</div>
    </div>
  </section>
  <!-- section start -->

  <!-- section footer -->
  <section class="footer">
    <div class="container">
      <div class="left">
        <a href="#" class="logo">a'property</a>
        <span>find a variety of properties that suit you very easilty</span>
        <span>forget all difficulties in finding a residencies for you</span>
      </div>
      <div class="right">
        <h3>infotmation</h3>
        <span
          ><font-awesome-icon icon="location-dot" />145 new york,FL 457l,
          USA</span
        >
        <nav class="navbar">
          <a href="#home">Residencies</a>
          <a href="#value">Our value</a>
          <a href="#contact">Contact us</a>
        </nav>
      </div>
    </div>
  </section>
  <!-- section footer -->
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jaldi:wght@400;700&display=swap");

:root {
  --white: #fff;
  --orange: #ff7800;
  --black: #131110;
  --light-color: #9a9797;
  --box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
  --border: 0.2rem solid rgba(0, 0, 0, 0.1);
  --outline: 0.1rem solid rgba(0, 0, 0, 0.1);
  --outline-hover: 0.2rem solid var(--light-color);
  --linear-gradient: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgb(65, 118, 168) 0%,
    rgb(80, 102, 226) 92%
  );
}

* {
  font-family: "Jaldi", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  border: none;
  text-decoration: none;
  text-transform: capitalize;
  overflow-x: hidden;
  scroll-behavior: smooth;
  scroll-padding-top: 12em;
  font-size: 62.5%;
}

body {
  background: #eee;
}

section {
  padding: 2rem 16%;
}

.btn {
  font-weight: 500;
  padding: 0.6rem 1rem;
  color: var(--white);
  background: var(--linear-gradient);
  border: none;
  border-radius: 0.5rem;
  transition: all 300ms ease-in;
}

.btn:hover {
  cursor: pointer;
  transform: scale(1.1);
}

.header {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--black);
  box-shadow: var(--box-shadow);
  padding: 1rem 15%;
}

.header .logo {
  font-size: 2.4rem;
  font-weight: bolder;
  color: var(--white);
  text-transform: uppercase;
  letter-spacing: 0.3rem;
}

.header .navbar {
  padding: 0.5rem 1rem;
}

.header .navbar a {
  position: relative;
  font-size: 1.6rem;
  font-weight: 500;
  margin: 0 2rem;
  text-transform: capitalize;
  letter-spacing: 1px;
  color: var(--white);
  transition: 0.3s ease;
}

/* .header .navbar a::before {
  position: absolute;
  content: "";
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background: rgb(90 126 238);
  transition: 0.3s ease;
}

.header .navbar a:hover:before {
  width: 100%;
} */

.header .navbar a:hover {
  color: rgb(90 126 238);
}

.header svg {
  font-size: 2.5rem;
  color: var(--white);
}

.header .bars,
.header .staggered {
  display: none;
}

.header .navbar .btn {
  margin-left: 4rem;
}

.header .navbar .btn a:hover {
  color: var(--white);
}

.white {
  position: absolute;
  width: 20rem;
  height: 20rem;
  background: rgba(255, 255, 255, 0.522);
  filter: blur(100px);
  z-index: 2000;
  top: 4rem;
  left: 4rem;
}

.home {
  color: var(--white);
  position: relative;
  padding-top: 12rem;
  padding-bottom: 5rem;
  background: var(--black);
}

.home .container,
.value .container,
.contact .container {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.home .container .img-container,
.value .container .img-container,
.contact .container .img-container {
  width: 30rem;
  height: 35rem;
  overflow: hidden;
  border-radius: 15rem 15rem 0 0;
  border: 5px solid rgba(96, 96, 96, 0.2);
}

.home .container .img-container img,
.value .container .img-container img,
.contact .container .img-container img {
  width: 100%;
  height: 100%;
}

.home .container .left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
}

.home .container .title {
  position: relative;
  height: 100%;
  z-index: 1;
}

.home .container .title .cicle {
  height: 6rem;
  width: 6rem;
  background: var(--orange);
  border-radius: 50%;
  position: absolute;
  right: 70%;
  top: 0;
  z-index: -1;
}

.home .container .title h1 {
  font-size: 4.5rem;
  font-weight: 600;
  line-height: 4rem;
  letter-spacing: 3px;
  overflow-y: hidden;
}

.home .container .description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.home .container .description span {
  font-size: 1.6rem;
  color: var(--light-color);
}

.home .container .search {
  background: var(--white);
  border-radius: 0.5rem;
  padding: 0.5rem;
  padding-left: 1.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.home .container .search .btn {
  font-size: 1.5rem;
  text-transform: uppercase;
  width: 7rem;
}

.home .container .search input {
  font-size: 1.8rem;
  width: 70%;
  text-transform: none;
}

.home .container .stats {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.home .container .stats .col {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.home .container .stats .col p {
  font-size: 2.8rem;
}

.home .container .stats .col .text {
  font-size: 1.4rem;
  color: var(--light-color);
}

.home .container .stats .col span {
  color: var(--orange);
  font-size: 3rem;
  margin-left: 0.2rem;
}

.company .container {
  display: flex;
  justify-content: space-around;
  gap: 4rem;
  margin: 3rem 0;
  height: 100%;
  align-items: center;
}

.company .container img {
  width: 15rem;
  height: 100%;
  filter: grayscale(1);
  cursor: pointer;
  transition: all 0.4s ease-in;
  padding: 1rem;
}

.company .container img:hover {
  filter: none;
  transform: scale(1.1);
}

.residencies .container {
  width: 100%;
  padding: 1rem;
  display: grid;
  gap: 1.5;
}

.residencies .container .head {
  display: grid;
  align-items: center;
  justify-content: flex-start;
  position: relative;
}

.residencies .container .head .paginate {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 55%;
  right: 0.5rem;
}

.residencies .container .head .paginate .icon {
  background: #dae1ea;
  padding: 0.5rem;
  border-radius: 0.5rem;
  height: 3rem;
  width: 3rem;
  line-height: 2.5rem;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in;
}

.residencies .container .head .paginate .icon:hover {
  background: var(--light-color);
}

.residencies .container .head .paginate svg {
  font-size: 1.5rem;
  color: var(--black);
}

.residencies .container .head span:first-child,
.value .container .content span:first-child,
.contact .container .content span:first-child {
  color: var(--orange);
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: 1px;
}

.residencies .container .head span:nth-child(2) {
  color: var(--black);
  font-size: 2.8rem;
  font-weight: 600;
  margin-top: -1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.residencies .container .content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 2rem;
  margin-top: 0.5rem;
  padding: 4rem 1rem;
  border-top: 1px solid;
}

.residencies .container .card {
  background: transparent;
  border-radius: 0.5rem;
  width: 100%;
  height: 100%;
  padding: 2rem;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: 0.2s;
}

.residencies .container .card:hover {
  outline: var(--outline-hover);
  transform: translateY(-10px);
}

.residencies .container .card img {
  height: 20rem;
  width: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
}

.residencies .container .card p {
  margin-top: 1rem;
  font-size: 2.2rem;
  color: var(--black);
}

.residencies .container .card p span {
  font-size: 2.2rem;
  color: var(--orange);
  margin-right: 0.5rem;
}

.residencies .container .card span {
  font-size: 1.5rem;
  color: var(--black);
}

.value,
.contact {
  position: relative;
  padding-top: 5rem;
  padding-bottom: 10rem;
}

.value .container .right,
.value .container .content,
.value .container .row,
.contact .container .content,
.contact .container .row {
  display: flex;
  flex-direction: column;
}

.value .container .right {
  gap: 3rem;
}

.value .container .content,
.value .container .row,
.contact .container .content {
  gap: 1rem;
}

.value .container .content span:nth-child(2),
.contact .container .content span:nth-child(2) {
  color: var(--black);
  font-size: 2.8rem;
  font-weight: 600;
  margin-top: -2rem;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.value .container .content span:nth-child(3),
.contact .container .content span:nth-child(3) {
  color: var(--light-color);
  font-size: 1.6rem;
  text-transform: lowercase;
  border-top: 1px solid;
  padding: 1rem 0rem;
}

.value .container .row .box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  border-radius: 0.5rem;
  width: 97%;
  height: 100%;
  padding: 2rem;
  border: 0.2rem solid rgba(108, 108, 108, 0.143);
  cursor: pointer;
  transition: all 0.2s ease-in;
}

.value .container .row .box:hover,
.contact .container .row .box:hover {
  border: var(--outline-hover);
}

.value .container .row .box:hover {
  transform: translateX(10px);
}

.value .container .row .box span {
  font-size: 1.6rem;
}

.value .container .row .box svg {
  font-size: 1.8rem;
  color: var(--orange);
}

.value .container .row .box:hover svg {
  transform: rotate(-45deg);
}

.contact .container .row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  justify-items: center;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
}

.contact .container .row .box {
  background: transparent;
  border-radius: 0.5rem;
  width: 100%;
  height: 100%;
  padding: 1rem;
  border: 0.2rem solid rgba(108, 108, 108, 0.143);
  cursor: pointer;
  transition: all 0.2s ease-in;
}

.contact .container .row .box .title {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.contact .container .row .box .title span {
  padding: 0 1.5rem;
  display: block;
}

.contact .container .row .box .title span:first-child {
  font-size: 1.8rem;
}

.contact .container .row .box .title span:nth-child(2) {
  font-size: 1.5rem;
  color: var(--light-color);
  margin-top: -0.5rem;
}

.contact .container .row .box .title a {
  background: #dae1ea;
  height: 100%;
  padding: 1rem 1.5rem;
  border-radius: 0.4rem;
}

.contact .container .row .box .title a svg {
  color: var(--linear-gradient);
  font-size: 1.8rem;
}

.contact .container .row .box .title text {
  display: flex;
  flex-direction: column;
}

.contact .container .row .box .button {
  display: block;
  background: #dae1ea;
  margin-top: 1rem;
  padding: 1rem 1.5rem;
  text-align: center;
  border-radius: 0.4rem;
  font-size: 1.5rem;
  color: #2015e2;
  text-transform: uppercase;
  transition: all 0.4s ease-in;
}

.contact .container .row .box .button:hover {
  background: var(--linear-gradient);
  color: var(--white);
}

.start .container {
  position: relative;
  background: rgb(90 126 238);
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  padding: 2rem 4rem;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 5rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.start .container h3 {
  font-size: 3rem;
  color: var(--white);
  letter-spacing: 1px;
  margin: 1rem 0rem;
}

.start .container span {
  color: var(--white);
  font-size: 1.5rem;
}

.start .container .button {
  padding: 1rem 4rem;
  background: var(--white);
  border-radius: 0.5rem;
  font-size: 1.8rem;
  text-transform: uppercase;
  margin-top: 2rem;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease-in-out;
}

.start .container .button:hover {
  transform: scale(1.1);
}

.footer .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
  padding: 1rem;
}

.footer .container .left,
.footer .container .right {
  flex-direction: column;
  display: flex;
}

.footer .container .left a {
  font-size: 2.8rem;
  color: rgb(90 126 238);
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 1rem;
}

.footer .container .left span {
  font-size: 1.3rem;
}

.footer .container .right span {
  font-size: 1.3rem;
  color: var(--light-color);
}

.footer .container .right span svg {
  font-size: 1.5rem;
  margin-right: 1rem;
}

.footer .container .right h3 {
  font-size: 2.5rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: -1rem;
  color: rgb(90 126 238);
}

.footer .container .right .navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
}

.footer .container .right .navbar a {
  padding-right: 1.8rem;
  color: var(--black);
  font-size: 1.8rem;
}

.footer .container .right .navbar a:hover {
  color: rgb(90 126 238);
}

@media (max-width: 1200px) {
  * {
    font-size: 55%;
  }

  .header {
    padding: 2rem 12%;
  }

  section {
    padding: 2rem 16%;
  }
}

@media (max-width: 975px) {
  .header {
    padding: 2rem 6%;
  }

  .header .navbar {
    position: fixed;
    top: 100em;
    right: -110%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    box-shadow: var(--box-shadow);
    border-radius: 0.5rem;
    background: #fff;
    transition: all 0.2s ease-in-out;
    width: 25%;
  }

  .header .navbar.active {
    right: 4%;
  }

  .header .navbar a {
    padding: 1.5rem 0;
    width: 100%;
    color: var(--black);
  }

  .header .navbar a:hover,
  .header svg:hover {
    color: rgb(90 126 238);
  }

  .header .navbar .btn {
    display: block;
    width: 100%;
    height: 100%;
    line-height: 4rem;
    margin-top: 1rem;
    margin-left: 0;
    overflow: hidden;
  }

  .header .navbar .btn a {
    color: var(--white);
  }

  .header .navbar .btn:hover {
    transform: scale(1.025);
  }

  .header svg {
    display: block;
    cursor: pointer;
  }

  .header .staggered,
  .header .bars.active {
    display: none;
  }

  .header .bars,
  .header .staggered.active {
    display: block;
  }

  .home .container,
  .value .container,
  .contact .container,
  .footer .container {
    flex-direction: column;
    align-items: center;
  }

  .home .container .right,
  .value .container .right,
  .contact .container .right,
  .footer .container .right {
    margin-top: 4rem;
  }

  .company .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    justify-items: center;
    align-items: center;
  }

  .company .container img {
    width: 15rem;
  }

  .footer .container {
    align-items: flex-start;
  }
}

@media (max-width: 800px) {
  .header .navbar {
    width: 40%;
  }
}

@media (max-width: 600px) {
  * {
    font-size: 55%;
  }

  .header .navbar {
    width: 40%;
  }

  .company .container img {
    width: 18rem;
  }
}

@media (max-width: 595px) {
  .residencies .container .card:hover {
    transform: none;
  }
}

@media (max-width: 450px) {
  * {
    font-size: 45%;
    scroll-padding-top: 10em;
  }

  .header .navbar {
    top: 210em;
    width: 92%;
  }

  section {
    padding: 2rem;
  }

  .residencies .container .head .paginate {
    height: auto;
    top: 45%;
  }

  .residencies .container .content {
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    padding: 3rem 10rem;
    gap: 4rem;
  }

  .value .container .row .box {
    width: 96%;
  }

  .footer .container .left a,
  .footer .container .right h3 {
    font-size: 3rem;
  }

  .footer .container .left span,
  .footer .container .right span {
    font-size: 1.8rem;
  }

  .footer .container .right .navbar a {
    padding-right: 2.2rem;
    font-size: 2.2rem;
  }
}

@media (max-width: 390px) {
  * {
    font-size: 42%;
  }

  .header .navbar {
    top: 270em;
  }

  .residencies .container .head span:first-child,
  .value .container .content span:first-child,
  .contact .container .content span:first-child {
    font-size: 2.1rem;
  }

  .residencies .container .head span:nth-child(2),
  .value .container .content span:nth-child(2),
  .contact .container .content span:nth-child(2) {
    font-size: 2.4rem;
  }
}
</style>
