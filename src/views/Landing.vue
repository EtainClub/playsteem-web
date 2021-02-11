<template>
  <div>
    <div class="position-relative">
      <!-- shape Hero -->
      <section
        class="section section section-shaped my-0 overflow-hidden"
        style="padding-top: 5px"
      >
        <div class="shape shape-style-1 bg-gradient-warning shape-skew">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="container shape-container d-flex">
          <div class="col px-0">
            <div class="row">
              <div class="col-lg-6">
                <h1 class="display-3 text-white">
                  Let's Blurt!
                  <span>
                    Let's Blog with Mobile Phones. It is easier and safer!!!
                  </span>
                </h1>
                <!-- <p class="lead text-white">
                  Play your dreams, and you can play with dreams, too.
                  <b style="color: yellow">PlayDreams</b> is mobile app and
                  community of people who share their dreams.
                </p> -->
                <div class="btn-wrapper">
                  <base-button
                    tag="a"
                    class="mb-3 mb-sm-0"
                    type="warning"
                    icon="ni ni-cloud-download-95"
                    >Android</base-button
                  >
                  <base-button
                    tag="a"
                    class="mb-3 mb-sm-0"
                    type="white"
                    icon="ni ni-cloud-download-95"
                    >iPhone</base-button
                  >
                  <base-button
                    tag="a"
                    class="mb-3 mb-sm-0"
                    type="info"
                    icon="ni ni-cloud-download-95"
                    >Android APK</base-button
                  >
                </div>
                <h1 class="display-3 text-white">
                  Coming Soon!
                  <span>
                    For more details, please visit
                    <a href="https://blurt.world/@letsblurt">here</a>
                  </span>
                </h1>
                <div class="col-lg-4">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/d3e-OAWyRjY"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <div class="col-lg-6">
                <img src="img/letsblurt/letsblurt.jpg" class="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 1st Hero Variation -->
      <section class="section section-lg pt-lg-0 mt--200">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-12">
              <div class="row row-grid">
                <div class="col-lg-4">
                  <card class="border-0" hover shadow body-classes="py-5">
                    <icon
                      name="fa fa-calendar-o"
                      type="primary"
                      rounded
                      class="mb-4"
                    ></icon>
                    <h5 class="text-primary text-uppercase">Be Free</h5>
                    <p class="description mt-3">Be Free</p>
                    <div>
                      <badge type="primary" rounded>Freedom</badge>
                      <badge type="primary" rounded>Life</badge>
                      <badge type="primary" rounded>Blurt</badge>
                    </div>
                  </card>
                </div>
                <div class="col-lg-4">
                  <card class="border-0" hover shadow body-classes="py-5">
                    <!-- <cryptoicon
                      symbol="steem"
                      size="48"
                      style="margin-bottom: 16px"
                    /> -->
                    <icon
                      name="fa fa-calendar-o"
                      type="primary"
                      rounded
                      class="mb-4"
                    ></icon>
                    <h5 class="text-success text-uppercase">Be Yourself</h5>
                    <p class="description mt-3">Be Yourself</p>
                    <div>
                      <badge type="success" rounded>You</badge>
                      <badge type="success" rounded>Yourself</badge>
                      <badge type="success" rounded>Blog</badge>
                    </div>
                  </card>
                </div>
                <div class="col-lg-4">
                  <card class="border-0" hover shadow body-classes="py-5">
                    <icon
                      name="fa fa-mobile"
                      type="warning"
                      rounded
                      class="mb-4"
                    ></icon>
                    <h5 class="text-warning text-uppercase">Let's Blurt</h5>
                    <p class="description mt-3">
                      You can freely blurt whatever you want
                    </p>
                    <div>
                      <badge type="warning" rounded>Mobile</badge>
                      <badge type="warning" rounded>Cryptocurrency</badge>
                      <badge type="warning" rounded>Apps</badge>
                    </div>
                  </card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Landing extends Vue {
  numEtains = 156;
  numCases = 95;
  numAreas = 50;
  numCountries = 4;
  onClickSteemit() {
    console.log("etain steemit");
  }
}
</script>
