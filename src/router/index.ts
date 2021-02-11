import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import AppHeader from "../layout/AppHeader";
import AppFooter from "../layout/AppFooter";
import Landing from "../views/Landing.vue";
import LandingKO from "../views/LandingKO.vue";
import MobileAppKO from "../views/MobileAppKO.vue";
import MobileApp from "../views/MobileApp.vue";
import Terms from "../views/Terms.vue";
import TermsKO from "../views/TermsKO.vue";
import Privacy from "../views/Privacy.vue";
import PrivacyKO from "../views/PrivacyKO.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "landing",
    components: {
      header: AppHeader,
      default: Landing,
      footer: AppFooter,
    },
  },
  {
    path: "/landing",
    name: "landing",
    components: {
      header: AppHeader,
      default: Landing,
      footer: AppFooter,
    },
  },
  {
    path: "/landing-ko",
    name: "landing-ko",
    components: {
      header: AppHeader,
      default: LandingKO,
      footer: AppFooter,
    },
  },
  {
    path: "/mobile",
    name: "mobile",
    components: {
      header: AppHeader,
      default: MobileApp,
      footer: AppFooter,
    },
  },
  {
    path: "/mobile-ko",
    name: "mobile-ko",
    components: {
      header: AppHeader,
      default: MobileAppKO,
      footer: AppFooter,
    },
  },
  {
    path: "/terms-ko",
    name: "terms-ko",
    components: {
      header: AppHeader,
      default: TermsKO,
      footer: AppFooter,
    },
  },
  {
    path: "/terms",
    name: "terms",
    components: {
      header: AppHeader,
      default: Terms,
      footer: AppFooter,
    },
  },

  {
    path: "/privacy-ko",
    name: "privacy-ko",
    components: {
      header: AppHeader,
      default: PrivacyKO,
      footer: AppFooter,
    },
  },
  {
    path: "/privacy",
    name: "privacy",
    components: {
      header: AppHeader,
      default: Privacy,
      footer: AppFooter,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
