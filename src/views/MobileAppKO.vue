<template>
  <div class="profile-page">
    <section class="section-profile-cover section-shaped my-0">
      <div class="shape shape-style-1 shape-primary alpha-4">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="container">
        <card gradient="warning" no-body shadow-size="lg" class="border-0">
          <div class="p-5">
            <div class="row align-items-center">
              <div class="col-lg-12">
                <h3 class="text-white">
                  안드로이드 테스트 앱이 드디어 공개되었습니다.
                </h3>
                <p class="lead text-white mt-2">
                  정식 출시는 2021년 3월 중 예정되어 있습니다.
                </p>
                <p class="lead text-white mt-2">
                  지금 안드로이드 APK 파일을 다운로드 할 수 있습니다. 일반적으로
                  64 Bits를 다운로드 받으시면 됩니다.
                </p>
              </div>
            </div>
          </div>
        </card>
      </div>
    </section>

    <section class="section section-lg pt-lg-0 mt--100">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="row row-grid">
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <div class="text-center">
                    <icon
                      name="fa fa-android"
                      type="danger"
                      rounded
                      class="mb-4"
                    ></icon>
                    <h5 class="text-danger text-uppercase">안드로이드</h5>
                    <div>
                      <badge type="danger" rounded>버전 1.0.0</badge>
                    </div>
                    <base-button disabled href="#" type="danger" class="mt-4"
                      >Google Play</base-button
                    >
                  </div>
                </card>
              </div>
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <div class="text-center">
                    <icon
                      name="fa fa-apple"
                      type="primary"
                      rounded
                      class="mb-4"
                    ></icon>
                    <h5 class="text-primary text-uppercase">
                      아이폰 (TestFlight)
                    </h5>
                    <div>
                      <badge type="primary" rounded>버전 0.9.0</badge>
                    </div>
                    <base-button
                      tag="a"
                      href="https://testflight.apple.com/join/PwwsDEry"
                      type="primary"
                      class="mt-4"
                      >App Store</base-button
                    >
                  </div>
                </card>
              </div>
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <div class="text-center">
                    <icon
                      name="fa fa-android"
                      type="info"
                      rounded
                      class="mb-4"
                    ></icon>
                    <h5 class="text-info text-uppercase">안드로이드 APK</h5>
                    <div>
                      <badge type="info" rounded>버전 0.9.0</badge>
                    </div>
                    <base-button
                      tag="a"
                      href="https://github.com/EtainClub/playsteem/releases/download/beta-0.9.0/playsteem-arm64-0.9.0.apk"
                      type="info"
                      class="mt-4"
                      >64 Bits</base-button
                    >
                    <base-button
                      tag="a"
                      href="https://github.com/EtainClub/playsteem/releases/download/beta-0.9.0/playsteem-arm-0.9.0.apk"
                      type="info"
                      class="mt-4"
                      >32 Bits</base-button
                    >
                  </div>
                </card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
