<template>
  <div>
    <div class="position-relative">
      <!-- shape Hero -->
      <section class="section-shaped my-0">
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
        <div class="container shape-container d-flex">
          <div class="col px-0">
            <div class="row">
              <div class="col-lg-6">
                <h1 class="display-3 text-white">이타인클럽 철학과 개발 스토리</h1>
                <p class="lead text-white">단순한 구현 글이 아니라 이타인클럽의 철학과 그 철학에 맞물려 개발한 내용들을 담았습니다.</p>
                <div class="btn-wrapper">
                  <base-button
                    tag="a"
                    href="https://play.google.com/store/apps/details?id=club.etain.helpus"
                    class="mb-3 mb-sm-0"
                    type="warning"
                    icon="ni ni-cloud-download-95"
                  >안드로이드</base-button>
                  <base-button
                    tag="a"
                    href="https://apps.apple.com/us/app/helpus-instant-help-in-town/id1496615309"
                    class="mb-3 mb-sm-0"
                    type="white"
                    icon="ni ni-cloud-download-95"
                  >아이폰</base-button>
                  <base-button
                    tag="a"
                    href="https://www.creative-tim.com/product/argon-design-system"
                    class="mb-3 mb-sm-0"
                    type="info"
                    icon="ni ni-cloud-download-95"
                  >안드로이드 APK</base-button>
                </div>
              </div>
              <div class="col-lg-6">
                <img src="img/etainclub/occupation.png" class="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 1st Hero Variation -->
    </div>
    <section class="section section-lg pt-lg-0 mt--200">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="row row-grid">
              <div
                v-for="(story, id) in storyCards"
                :key="id"
                class="col-lg-4"
                style="margin-bottom: 20px"
              >
                <card
                  :gradient="story.gradient"
                  class="border-0"
                  hover
                  shadow
                  body-classes="py-5"
                  style="min-height: 370px"
                >
                  <h5 class="text-white">#{{ id+1 }}</h5>
                  <h5 class="text-white">{{ story.title }}</h5>
                  <p class="description mt-3">{{ story.content }}</p>
                  <div>
                    <badge
                      v-for="(tag, idx) in story.keywords"
                      :key="idx"
                      :type="story.type"
                      rounded
                    >{{ tag }}</badge>
                  </div>
                  <base-button tag="a" :href="story.link" :type="story.type" class="mt-4">자세히 보기</base-button>
                </card>
              </div>
            </div>
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
  numAreas = 55;
  onClickSteemit() {
    console.log("etain steemit");
  }
  storyCards = [
    {
      type: "info",
      gradient: "yellow",
      title: "이타인클럽 철학과 개발",
      content:
        "R&D (Research and Development)가 아니라 P&D (Philosophy and Development)의 새로운 글쓰기 형태를 제안합니다. 이타인클럽의 철학과 개발 방향에 대한 철학을 담았습니다.",
      keywords: ["우리동네", "실시간 도움", "오프라인 도움"],
      link:
        "https://medium.com/@etainclub/%EC%B2%A0%ED%95%99%EA%B3%BC-%EA%B0%9C%EB%B0%9C-1-%EC%8B%9C%EC%9E%91%ED%95%98%EB%A9%B0-p-d-145bedb0312a"
    },
    {
      type: "danger",
      gradient: "info",
      title: "서비스 홈페이지 만들기",
      content:
        "이타인클럽 서비스의 첫 구상과 홈페이지 개발에 대한 이야기를 담았습니다.",
      keywords: ["무보상", "도움 선순환", "지역 커뮤니티"],
      link:
        "https://medium.com/@etainclub/%EC%B2%A0%ED%95%99%EA%B3%BC-%EA%B0%9C%EB%B0%9C-2-%EC%84%9C%EB%B9%84%EC%8A%A4-%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%A7%8C%EB%93%A4%EA%B8%B0-b00e798020a"
    },
    {
      type: "warning",
      gradient: "success",
      title: "서비스를 위한 서버 구축",
      content:
        "도움을 주고 받는데 가장 핵심은 도움을 주고자 하는 사람들입니다.도움을 주고자 하는 사람이 없다면 이 서비스는 돌아가지 않기 때문입니다. 서비스를 위한 서버에 관한 얘기를 담았습니다.",
      keywords: ["무보상", "도움 선순환", "지역 커뮤니티"],
      link:
        "https://medium.com/@etainclub/%EC%B2%A0%ED%95%99%EA%B3%BC-%EA%B0%9C%EB%B0%9C-3-%EC%84%9C%EB%B9%84%EC%8A%A4%EB%A5%BC-%EC%9C%84%ED%95%9C-%EC%84%9C%EB%B2%84-%EA%B5%AC%EC%B6%95-eb03f772e06d"
    },
    {
      type: "warning",
      gradient: "success",
      title: "도움 주는 방법",
      content:
        "어떻게 도와 줄 것인가에 대한 고민과 초기 시도에 대한 개발 내용을 담았습니다.",
      keywords: ["무보상", "도움 선순환", "지역 커뮤니티"],
      link:
        "https://medium.com/@etainclub/%EC%B2%A0%ED%95%99%EA%B3%BC-%EA%B0%9C%EB%B0%9C-4-%EB%8F%84%EC%9B%80-%EC%A3%BC%EB%8A%94-%EB%B0%A9%EB%B2%95-112b155d4f32"
    },
    {
      type: "warning",
      gradient: "success",
      title: "어떤 도움을 줄 수 있는가?",
      content:
        "이타인클럽이 어떤 도움을 줄 수 있는가 고민한 내용과 초기 도움 사례를 담았습니다.",
      keywords: ["무보상", "도움 선순환", "지역 커뮤니티"],
      link:
        "https://medium.com/@etainclub/%EC%B2%A0%ED%95%99%EA%B3%BC-%EA%B0%9C%EB%B0%9C-5-%EC%96%B4%EB%96%A4-%EB%8F%84%EC%9B%80%EC%9D%84-%EC%A4%84-%EC%88%98-%EC%9E%88%EB%8A%94%EA%B0%80-3998095605ab"
    },
    {
      type: "warning",
      gradient: "orange",
      title: "친절이 샘솟는다",
      content:
        "세상에 도움을 나누는 단체들이 있습니다. 그중 Kind Spring이라는 단체를 벤치마킹해 봅니다.",
      keywords: ["KindSpring", "선행", "지역 커뮤니티"],
      link:
        "https://medium.com/@etainclub/%EC%B2%A0%ED%95%99%EA%B3%BC-%EA%B0%9C%EB%B0%9C-6-%EC%B9%9C%EC%A0%88%EC%9D%B4-%EC%83%98%EC%86%9F%EB%8A%94%EB%8B%A4-kind-spring-577ef1f7ca5"
    },
    {
      type: "warning",
      gradient: "red",
      title: "보상없는 도움 주기",
      content:
        "댓가 없이 그냥 도와줄께 — Be My Eyes, 시력 장애자와 봉사자를 연결시켜주는 훌륭한 앱의 이야기입니다.",
      keywords: ["BeMyEyes", "시력 장애인", "자원봉사자"],
      link:
        "https://medium.com/@etainclub/%EC%B2%A0%ED%95%99%EA%B3%BC-%EA%B0%9C%EB%B0%9C-7-be-my-eyes-%EB%B3%B4%EC%83%81%EC%97%86%EB%8A%94-%EB%8F%84%EC%9B%80-%EC%A3%BC%EA%B8%B0-f77b452f28cf"
    },
    {
      type: "warning",
      gradient: "success",
      title: "Open Tutorials — 컨텐츠의 커리큘럼",
      content:
        "생활코딩으로 유명한 오픈튜토리얼스(opentutorials.org)를 알게 됩니다. 그곳에서 만든 이타인클럽 커리큘럼 얘기를 해볼께요.",
      keywords: ["OpenTutorials", "커리큘럼", "지역 커뮤니티"],
      link:
        "https://medium.com/@etainclub/%EC%B2%A0%ED%95%99%EA%B3%BC-%EA%B0%9C%EB%B0%9C-8-open-tutorials-%EC%BB%A8%ED%85%90%EC%B8%A0%EC%9D%98-%EC%BB%A4%EB%A6%AC%ED%81%98%EB%9F%BC-700f2a1a576a"
    },
    {
      type: "warning",
      gradient: "success",
      title: "스팀잇 Help It Forward 운동",
      content:
        "블록체인 기반 블로그 스팀잇과의 만남을 통해, Help It Forward 운동을 전개하는 이야기입니다.",
      keywords: ["스팀잇", "도움 선순환", "지역 커뮤니티"],
      link:
        "https://medium.com/@etainclub/%EC%B2%A0%ED%95%99%EA%B3%BC-%EA%B0%9C%EB%B0%9C-9-%EC%8A%A4%ED%8C%80%EC%9E%87-help-it-forward-%EC%9A%B4%EB%8F%99-%EC%99%84%EB%B2%BD%ED%95%9C-%ED%94%8C%EB%9E%AB%ED%8F%BC-b24daad76857"
    },
    {
      type: "warning",
      gradient: "success",
      title: "사람이 우선이다! — 네이버 카페",
      content:
        "Help it Forward: 내가 받은 도움, 다른 사람이 필요할 때 도와 준다! 도움이 필요한 사람과 도움을 주는 사람이 직접 만나야만 하는 것이지요. 그래서 시작한 네이버카페에서 지역기반 이타인클럽 운동 얘기를 담았습니다.",
      keywords: ["네이버카페", "도움 연결", "도움 선순환"],
      link:
        "https://medium.com/@etainclub/%EC%B2%A0%ED%95%99%EA%B3%BC-%EA%B0%9C%EB%B0%9C-10-%EC%82%AC%EB%9E%8C%EC%9D%B4-%EC%9A%B0%EC%84%A0%EC%9D%B4%EB%8B%A4-%EB%84%A4%EC%9D%B4%EB%B2%84-%EC%B9%B4%ED%8E%98-d1149cd27bbf"
    },
    {
      type: "warning",
      gradient: "success",
      title: "실시간 앱만이 이 상황을 해결할 수 있다!",
      content:
        "남들이 지나간 방식을 따라서 가는 것에는 이타인클럽 한계가 분명히 존재했습니다. 그래서 남이 시도하지 않은 실시간 도움 주고 받기 앱을 개발을 구상한 이야기를 담았습니다.",
      keywords: ["실시간 도움", "앱", "새로운 도전"],
      link:
        "https://medium.com/@etainclub/%EC%B2%A0%ED%95%99%EA%B3%BC-%EA%B0%9C%EB%B0%9C-11-%EC%8B%A4%EC%8B%9C%EA%B0%84-%EC%95%B1%EB%A7%8C%EC%9D%B4-%EC%9D%B4-%EC%83%81%ED%99%A9%EC%9D%84-%ED%95%B4%EA%B2%B0%ED%95%A0-%EC%88%98-%EC%9E%88%EB%8B%A4-41baf156eff6"
    },
    {
      type: "warning",
      gradient: "success",
      title: "동네 사람끼리는 서로 돕고 싶어한다",
      content:
        "주변 동네 사람들과는 왠지 모르게 안쓰는 물건은 무료 나눔을 하는 분위기가 만들어집니다. 도움이 필요하면 도와주고 싶어집니다. 동네 사람들끼리라도 보다 신뢰할 수 있는 생각을 담았습니다.",
      keywords: ["우리 동네", "당근 마켓", "지역 인증"],
      link:
        "https://medium.com/@etainclub/%EC%B2%A0%ED%95%99%EA%B3%BC-%EA%B0%9C%EB%B0%9C-12-%EB%8F%99%EB%84%A4-%EC%82%AC%EB%9E%8C%EB%81%BC%EB%A6%AC%EB%8A%94-%EC%84%9C%EB%A1%9C-%EB%8F%95%EA%B3%A0-%EC%8B%B6%EC%96%B4%ED%95%9C%EB%8B%A4-1f8fac7e73a9"
    },
    {
      type: "warning",
      gradient: "success",
      title: "실시간 도움 주고 받기에 필수적인 것들",
      content:
        "실시간 도움 주고 받기 앱을 만들 때, 어떤 것들을 구현해야 할지 생각해 보게 됩니다. 온라인 도움 주고 받기도 그렇지만 오프라인으로 집을 방문하여 도움을 주는데 확실한 신원인증 방법 등에 대한 생각을 담았습니다.",
      keywords: ["실시간 도움", "앱", "블록체인"],
      link:
        "https://medium.com/@etainclub/%EC%B2%A0%ED%95%99%EA%B3%BC-%EA%B0%9C%EB%B0%9C-13-%EC%8B%A4%EC%8B%9C%EA%B0%84-%EB%8F%84%EC%9B%80-%EC%A3%BC%EA%B3%A0-%EB%B0%9B%EA%B8%B0%EC%97%90-%ED%95%84%EC%88%98%EC%A0%81%EC%9D%B8-%EA%B2%83%EB%93%A4-e465ee66e503"
    },
    {
      type: "warning",
      gradient: "yellow",
      title: "실시간 도움 주고 받기 프로젝트 생성",
      content:
        "실시간 도움 앱을 구현하기 위한 구체적 방법과 화면 구성을 담았습니다.",
      keywords: ["안드로이드", "아이폰", "React Native"],
      link:
        "https://medium.com/@etainclub/%EC%B2%A0%ED%95%99%EA%B3%BC-%EA%B0%9C%EB%B0%9C-14-%EC%8B%A4%EC%8B%9C%EA%B0%84-%EB%8F%84%EC%9B%80-%EC%A3%BC%EA%B3%A0-%EB%B0%9B%EA%B8%B0-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%83%9D%EC%84%B1-67742d730767"
    },
    {
      type: "warning",
      gradient: "success",
      title: "Firebase 프로젝트 생성",
      content:
        "최대한 무료 서비스를 이용하여 서비스를 안정적으로 제공하기 위해 사용한 Firebase에 대한 내용을 담았습니다.",
      keywords: ["Firebase", "서버", "데이터베이스"],
      link:
        "https://medium.com/@etainclub/%EC%B2%A0%ED%95%99%EA%B3%BC-%EA%B0%9C%EB%B0%9C-15-firebase-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%83%9D%EC%84%B1-450b94548149?source=---------9------------------"
    },
    {
      type: "warning",
      gradient: "success",
      title: "익명성 — 인증방법",
      content:
        "도움 주고 받기를 보다 심적으로 편안하게 할 수 있는 익명성에 대한 생각을 담았습니다.",
      keywords: ["도움 주고 받기", "익명성", "인증 방법"],
      link:
        "https://medium.com/@etainclub/%EC%B2%A0%ED%95%99%EA%B3%BC-%EA%B0%9C%EB%B0%9C-16-%EC%9D%B5%EB%AA%85%EC%84%B1-%EC%9D%B8%EC%A6%9D%EB%B0%A9%EB%B2%95-be77a178160?source=---------8------------------"
    },
    {
      type: "warning",
      gradient: "success",
      title: "도움은 세계 공통적이다!",
      content:
        "앱을 만들 때, 앱 사용자에 대해 생각해 보게 됩니다. 어떤 앱은 국내 한정 서비스만 가능하고, 또 다른 앱은 세계 동일한 서비스가 가능할 수 있습니다. 도움 주고 받기는 세계 공통적입니다.",
      keywords: ["도움은 세계 공통", "익명성", "가입방법"],
      link:
        "https://medium.com/@etainclub/%EC%B2%A0%ED%95%99%EA%B3%BC-%EA%B0%9C%EB%B0%9C-17-%EB%8F%84%EC%9B%80%EC%9D%80-%EC%84%B8%EA%B3%84-%EA%B3%B5%ED%86%B5%EC%A0%81%EC%9D%B4%EB%8B%A4-98a0d9ddaf4f"
    },
    {
      type: "warning",
      gradient: "success",
      title: "전화번호 로그인/인증",
      content:
        "도움을 주고 받기 위해서는 익명성이 보장되면 좋지만, 다른 한편으로는 도움 받기를 남용할 수 있어서 전화번호 인증에 구현을 담았습니다.",
      keywords: ["도움", "익명성", "가입방법"],
      link:
        "https://medium.com/@etainclub/%EC%B2%A0%ED%95%99%EA%B3%BC-%EA%B0%9C%EB%B0%9C-18-%EC%A0%84%ED%99%94%EB%B2%88%ED%98%B8-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%9D%B8%EC%A6%9D-21a255e87ebe"
    },
    {
      type: "warning",
      gradient: "success",
      title: "도와주고 싶을 때 도와준다!",
      content:
        "도움은 누구나 요청할 수 있고, 누구나 줄 수 있습니다. 하지만 도움을 요청하는 순간도 다르고, 도움을 줄 수 있는 시간도 다릅니다. 이를 위한 생각과 구현을 담았습니다.",
      keywords: ["도움", "익명성", "가입방법"],
      link:
        "https://medium.com/@etainclub/%EC%B2%A0%ED%95%99%EA%B3%BC-%EA%B0%9C%EB%B0%9C-19-%EB%8F%84%EC%99%80%EC%A3%BC%EA%B3%A0-%EC%8B%B6%EC%9D%84-%EB%95%8C-%EB%8F%84%EC%99%80%EC%A4%80%EB%8B%A4-3519b4f1e2ec"
    },
    {
      type: "warning",
      gradient: "success",
      title: "Navigation — 대세를 따르라",
      content:
        "React Native에서는 공식 네이게이션 프레임워크가 없습니다. 따라서 적절한 네이게이션 패키지를 선택해야 합니다. 여러 네비게이션 중에서 가장 많이 사용하는 React Navigation을 사용하기 위한 내용을 담았습니다.",
      keywords: ["도움", "익명성", "가입방법"],
      link:
        "https://medium.com/@etainclub/%EC%B2%A0%ED%95%99%EA%B3%BC-%EA%B0%9C%EB%B0%9C-20-navigation-%EB%8C%80%EC%84%B8%EB%A5%BC-%EB%94%B0%EB%A5%B4%EB%9D%BC-ee04b4211859"
    }
  ];
}
</script>     

             
            

        
          
