<template>
  <div>
    <section class="section section section-shaped my-0 overflow-hidden" style="padding-top: 100px">
      <div class="shape shape-style-1 shape-default shape-skew">
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
      <div class="shape shape-style-1 bg-gradient-warning">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="container py-0">
        <div class="row row-grid align-items-center">
          <div class="col-lg-12 order-lg-1">
            <div class="d-flex px-3">
              <div>
                <icon
                  name="fa fa-cubes"
                  size="lg"
                  class="bg-gradient-white"
                  color="primary"
                  shadow
                  rounded
                ></icon>
              </div>
              <div class="pl-4">
                <h4 class="display-3 text-white">What is EtainClub?</h4>
              </div>
            </div>
            <card shadow class="shadow-lg--hover mt-5">
              <div class="d-flex px-3">
                <div>
                  <icon name="fa fa-bullhorn" gradient="success" color="white" shadow rounded></icon>
                </div>
                <div class="pl-4">
                  <h5 class="title text-success">EtainClub</h5>
                  <p>
                    'Etain' means a person who helps others in Korean.
                    So 'EtainClub' is a club of etains.
                    EtainClub is insipred by 'Be My Eyes' which connects the blind and a volunteer.
                    There are people feeling happy when they help others.
                    These are called 'Etains'.
                    There are also people having troubles with their problems such as install apps and 'don-know-what-do-do'.
                    EtainClub matches people wanting to help and people needing to get helped.
                  </p>
                </div>
              </div>
            </card>
            <card shadow class="shadow-lg--hover mt-5">
              <div class="d-flex px-3">
                <div>
                  <icon name="fa fa-bullhorn" gradient="warning" color="white" shadow rounded></icon>
                </div>
                <div class="pl-4">
                  <h5 class="title text-warning">What are the Differences?</h5>
                  <p>
                    Most exisitng platforms are just ask-and-answer.
                    Even though this platform is working but sometimes it is not a true solution
                    for people who do not know what to do to solve theire peroblems.
                    EtainClub aims that people consider the problems as their own problems
                    based on neighborhoods.
                    EtainClub club aims at 'help it forward' movement in our villages,
                    so you help others and then you get helped.
                    Using the app, you can ask help anytime we want and also you can help whenever you are available.
                    It is like a using an app calling a taxi.
                  </p>
                </div>
              </div>
            </card>
            <card shadow class="shadow-lg--hover mt-5">
              <div class="d-flex px-3">
                <div>
                  <icon name="fa fa-bullhorn" gradient="primary" color="white" shadow rounded></icon>
                </div>
                <div class="pl-4">
                  <h5 class="title text-warning">Benefits for Etains?</h5>
                  <p>
                    EtainClub is managed by volunteers who want to help their neighbors without any rewards.
                    Thus, etains (helpers) do not request any rewards.
                    Also the clients do not have to pay anything. EtainClub is a free service.
                    In some cases, the quality of help is good enough, or it might not be satisfying in other cases.
                    Clients can neither push the etains nor to put responsibility on them.
                  </p>
                </div>
              </div>
            </card>
            <card shadow class="shadow-lg--hover mt-5">
              <div class="d-flex px-3">
                <div>
                  <icon name="fa fa-bullhorn" gradient="info" color="white" shadow rounded></icon>
                </div>
                <div class="pl-4">
                  <h5 class="title text-warning">How to Prevent Abusing?</h5>
                  <p>
                    There are chances that some people do exploitation.
                    A malicious person tries to obtain personal information and use it badly.
                    You as an app user should be cautious.
                    Things that you should not do with EtainClub app:
                  </p>
                  <ul>
                    <li>Displaying card numer, passort number, bank account pasword or other personal information</li>
                    <li>Sharing telephone/cellphone number unless you trust the other</li>
                    <li>Sending sexual or hateful photos</li>
                  </ul>
                  <p>
                    If you really get helped, then please vote for Etains and share your story on community group.
                    These are the most effective ways to prevent the abusing.
                    For safer and more transperent, the following functions will be implemented:
                  </p>
                  <ul>
                    <li>Location-based authentication. This information will be recorded on a blockchain.</li>
                    <li>Asking and helping activities will be recorded on a blockchain.</li>
                    <li>Votes will be recorded on a blockchain.</li>
                    <li>Users share their helped stories on community group as well as helping stories.</li>
                    <li>If you have better ideas or suggestions, please share them on community group.</li>
                  </ul>
                </div>
              </div>
            </card>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Landing extends Vue {
  numEtains = 150;
  numCases = 90;
  numAreas = 50;
  onClickSteemit() {
    console.log("etain steemit");
  }
}
</script>
