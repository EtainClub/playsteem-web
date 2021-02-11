const state = {
  selectedLang: null,
};

// get state
const getters = {
  selectedLanguage: (state) => {
    // console.log("[store] getters");
    return state.selectedLang;
  },
};

// mutations
const mutations = {
  setSelectedLang: (state, lang) => {
    //    console.log("[store] set lang", lang);
    state.selectedLang = lang;
  },
};

export default {
  state,
  getters,
  mutations,
};
