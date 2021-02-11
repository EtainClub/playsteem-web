<template>
  <footer class="footer has-cards">
    <div class="container">
      <div class="row row-grid align-items-center my-md">
        <div v-if="language == 'ko'" class="col-lg-8">
          <h3 class="text-primary font-weight-light mb-2">블러트 하세요!</h3>
        </div>
        <div v-else class="col-lg-8">
          <h3 class="text-primary font-weight-light mb-2">Let's Blurt!</h3>
        </div>

        <!-- <div class="col-lg-4 text-lg-center btn-wrapper">
          <a
            class="btn btn-neurtal btn-icon-only btn-lg btn-round"
            href="https://steemit.com/trending/hive-122193"
            target="_blank"
            rel="noopener"
            data-toggle="tooltip"
            title="Steemit Community"
          >
            <cryptoicon symbol="steem" size="40" color="blue" />
          </a>
          <a
            target="_blank"
            rel="noopener"
            href="#"
            class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg"
            data-toggle="tooltip"
            data-original-title="Like us"
          >
            <i class="fa fa-facebook-square"></i>
          </a>

          <a
            target="_blank"
            rel="noopener"
            href="#"
            class="btn btn-neutral btn-icon-only btn-github btn-round btn-lg"
            data-toggle="tooltip"
            data-original-title="App Source Code"
          >
            <i class="fa fa-github"></i>
          </a>
        </div> -->
      </div>
      <hr />
      <div class="row align-items-center justify-content-md-between">
        <div v-if="language == 'ko'" class="col-md-12">
          <p class="lead">라이선스</p>
          <p>Comming soon.</p>
        </div>
        <div v-else class="col-md-12">
          <p class="lead">License</p>
          <p>Coming soon.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import BaseNav from '@/components/BaseNav';
import BaseDropdown from '@/components/BaseDropdown';
import CloseButton from '@/components/CloseButton';
import Cryptoicon from 'vue-cryptoicon';
import icons from 'vue-cryptoicon/src/icons';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import store from '@/store';

Cryptoicon.add(icons);
Vue.use(Cryptoicon);

@Component({
  components: {
    BaseNav,
    BaseDropdown,
    CloseButton,
  },
})
export default class AppHeader extends Vue {
  selectedLang = '';
  year = new Date().getFullYear();

  // compute language
  get language() {
    // first get the stored lang
    const storeLang = store.getters.selectedLanguage;
    if (typeof storeLang === 'undefined') {
      console.log('no stored lang', navigator.language.split('-')[0]);
      return navigator.language.split('-')[0];
    } else {
      console.log('stored lang', storeLang);
      return storeLang;
    }
  }
}
</script>
<style></style>
