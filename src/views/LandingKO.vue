<template>
  <div>
    <div class="position-relative">
      <!-- shape Hero -->
      <section
        class="section section section-shaped my-0 overflow-hidden"
        style="padding-top: 5px"
      >
        <div class="shape shape-style-1 bg-gradient-success shape-skew">
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
              <div class="col-lg-7">
                <h1 class="display-3 text-white">
                  PLAY STEEM!
                  <span>
                    Play Steem은 스팀잇 모바일 앱입니다. 앱에서 안전하고 쉽게
                    스팀잇 하세요.
                  </span>
                </h1>
                <!-- <p class="lead text-white">
                  Play your dreams, and you can play with dreams, too.
                  <b style="color: yellow">PlayDreams</b> is mobile app and
                  community of people who share their dreams.
                </p> -->
                <div class="btn-wrapper">
                  <base-button
                    @click="navigateToDownload"
                    tag="a"
                    class="mb-3 mb-sm-0"
                    type="warning"
                    icon="ni ni-cloud-download-95"
                    >Android</base-button
                  >
                  <base-button
                    @click="navigateToDownload"
                    tag="a"
                    class="mb-3 mb-sm-0"
                    type="white"
                    icon="ni ni-cloud-download-95"
                    >iPhone</base-button
                  >
                  <base-button
                    @click="navigateToDownload"
                    tag="a"
                    class="mb-3 mb-sm-0"
                    type="info"
                    icon="ni ni-cloud-download-95"
                    >Android APK</base-button
                  >
                </div>
                <h1 class="display-3 text-white">
                  안드로이드와 아이폰 테스트 앱 공개되었습니다!
                  <span>
                    보다 자세한 정보를 위해 다음을 방문하세요.
                    <a href="https://steemit.com/@etainclub">here</a>
                  </span>
                </h1>
                <h2>아이폰 데모 영상 (아이폰 6)</h2>
                <div class="col-lg-4">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/o6UL7nRS5f4"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <h2>안드로이드 데모 영상 (갤럭시 S9+)</h2>
                <div class="col-lg-4">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/GAhp5Zx8_s4"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <div class="col-lg-5">
                <img src="img/playsteem/playsteem.png" class="img-fluid" />
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
                      name="fa fa-mobile"
                      type="warning"
                      rounded
                      class="mb-4"
                    ></icon>
                    <h5 class="text-primary text-uppercase">It's App!</h5>
                    <p class="description mt-3">
                      There are several cool features only for mobile app.
                    </p>
                    <div>
                      <badge type="primary" rounded>Push Messages</badge>
                      <badge type="primary" rounded>Translation</badge>
                      <badge type="primary" rounded>OTP</badge>
                      <badge type="primary" rounded>TTS</badge>
                      <badge type="primary" rounded>Account Creation</badge>
                    </div>
                  </card>
                </div>
                <div class="col-lg-4">
                  <card class="border-0" hover shadow body-classes="py-5">
                    <cryptoicon
                      symbol="steem"
                      size="48"
                      style="margin-bottom: 16px"
                    />

                    <h5 class="text-success text-uppercase">
                      Get Rewards!
                    </h5>
                    <p class="description mt-3">
                      You can get rewards by posting your stories as well as by
                      voting others' posts. You might be a beneficiary of posts.
                    </p>
                    <div>
                      <badge type="success" rounded>Posting</badge>
                      <badge type="success" rounded>Curation</badge>
                      <badge type="success" rounded>Beneficiary</badge>
                    </div>
                  </card>
                </div>
                <div class="col-lg-4">
                  <card class="border-0" hover shadow body-classes="py-5">
                    <icon
                      name="fa fa-lock"
                      type="warning"
                      rounded
                      class="mb-4"
                    ></icon>
                    <h5 class="text-warning text-uppercase">Easy and Safe</h5>
                    <p class="description mt-3">
                      Feel the convenience with the App. Your private key never
                      leaves the outside. Find more cool features!
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

  navigateToDownload() {
    this.$router.push("/mobile-ko").catch(() => console.log("same route"));
  }
}
</script>
