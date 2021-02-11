<template>
  <header class="header-global">
    <base-nav class="navbar-main" transparent type effect="light" expand>
      <router-link
        v-if="language == 'ko'"
        slot="brand"
        class="navbar-brand mr-lg-5"
        to="/landing-ko"
      >
        <img src="img/brand/logo.png" alt="logo" />
        <span class="pl-2 pt-5">Let's Blurt</span>
      </router-link>
      <router-link
        v-else
        slot="brand"
        class="navbar-brand mr-lg-5"
        to="/landing"
      >
        <img src="img/brand/logo.png" alt="logo" />
        <span class="pl-2 pt-5">Let's Blurt</span>
      </router-link>

      <div class="row" slot="content-header" slot-scope="{ closeMenu }">
        <div class="col-6 collapse-brand">
          <a href="#">
            <img src="img/brand/logo.png" />
          </a>
        </div>
        <div class="col-6 collapse-close">
          <close-button @click="closeMenu"></close-button>
        </div>
      </div>

      <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
        <base-dropdown tag="li" class="nav-item">
          <a
            slot="title"
            href="#"
            class="nav-link"
            data-toggle="dropdown"
            role="button"
          >
            <i class="fa fa-globe"></i>
            <span class="nav-link-inner--text">Language</span>
          </a>
          <base-button @click="selectLanguage('ko')" class="dropdown-item"
            >한국어</base-button
          >
          <base-button @click="selectLanguage('en')" class="dropdown-item"
            >English</base-button
          >
        </base-dropdown>
      </ul>
      <ul class="navbar-nav align-items-lg-center ml-lg-auto">
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="https://blurt.world/"
            target="_blank"
            rel="noopener"
            data-toggle="tooltip"
            title="Blurt World"
          >
            <!-- <cryptoicon symbol="steem" size="16" color="white" /> -->
            <span class="ml-2">Community</span>
            <span class="nav-link-inner--text d-lg-none">Community</span>
          </a>
        </li>

        <li class="nav-item d-none d-lg-block ml-lg-4">
          <a target="_blank" rel="noopener" class="btn btn-neutral btn-icon">
            <span class="btn-inner--icon">
              <i class="fa fa-cloud-download mr-2"></i>
            </span>
            <router-link v-if="language == 'ko'" to="/mobile-ko"
              >모바일 앱</router-link
            >
            <router-link v-else to="/mobile">Mobile App</router-link>
          </a>
        </li>
      </ul>
    </base-nav>
  </header>
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
  // selected language
  selectedLang: '';

  // language computed
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

  selectLanguage(lang: string) {
    // store language
    this.$store.commit('setSelectedLang', lang);
    // navigate to the right page
    if (lang === 'ko') {
      this.$router.push('/landing-ko').catch(() => console.log('same route'));
    } else if (lang === 'en') {
      this.$router.push('/landing').catch(() => console.log('same route'));
    }
  }

  // computed
  //  get language() {
  //    const lang = navigator.language.split("-")[0];
  //    return lang;
  //  }
}
</script>
<style></style>
