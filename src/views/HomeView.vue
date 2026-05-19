<script setup lang="ts">
  import Footer from '@/components/Footer.vue';
  import Navbar from '@/components/Navbar.vue';
  import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="container position-relative" style="min-height: 100vh">
    <div
      class="d-md-none position-absolute"
      style="
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: url(https://images.unsplash.com/photo-1645295977630-0474a5d386cf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
        background-position: center center;
      "
    ></div>
    <Navbar />
    <img
      class="d-none d-md-block img-fluid"
      src="https://images.unsplash.com/photo-1575719028439-65ce8662c1cc?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="banner-desktop"
    />
    <div class="position-absolute top-0 start-0 bottom-0 end-0">
      <div class="h-100 d-flex flex-column justify-content-center align-items-center text-white">
        <h2>VIBELINK 藝感售票</h2>
        <p class="mb-0">重新定義每一次感官交會的瞬間</p>
        <RouterLink to="/products" class="btn btn-dark rounded-3 mt-6">來去逛逛</RouterLink>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row mt-5">
      <div class="col-md-4 mt-md-4">
        <div class="card border-0 mb-4">
          <img
            style="height: 300px"
            src="https://plus.unsplash.com/premium_photo-1684169410483-602c50535bde?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            class="card-img-top rounded-0 object-fit-cover"
            alt="賽博龐克之夜"
          />
          <div class="card-body text-center">
            <h4>賽博龐克之夜</h4>
            <div class="d-flex justify-content-between">
              <p class="card-text text-muted mb-0">360度環繞投影與AI實時動態感應，感受高科技與頹廢美學的撞擊。</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 mt-md-4">
        <div class="card border-0 mb-4">
          <img
            style="height: 300px"
            src="https://images.unsplash.com/photo-1619857121838-997e82345250?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            class="card-img-top rounded-0 object-fit-cover"
            alt="極簡之境巡禮"
          />
          <div class="card-body text-center">
            <h4>極簡之境巡禮</h4>
            <div class="d-flex justify-content-between">
              <p class="card-text text-muted mb-0">建築專家帶路，深入探索美術館幾何角落與清水模的光影比例。</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 mt-md-4">
        <div class="card border-0 mb-4">
          <img
            style="height: 300px"
            src="https://plus.unsplash.com/premium_photo-1677545820818-f1639f3e5b65?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            class="card-img-top rounded-0 object-fit-cover"
            alt="流動宇宙音樂會"
          />
          <div class="card-body text-center">
            <h4>流動宇宙音樂會</h4>
            <div class="d-flex justify-content-between">
              <p class="card-text text-muted mb-0">當巴哈的古典音符撞擊AI演算法，轉化為現場流動的數位粒子宇宙。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-light mt-7">
    <div class="container">
      <div class="row justify-content-center py-7">
        <div class="col-md-6 text-center">
          <h3>用戶口碑好評</h3>
          <p class="my-5">
            “這是我使用過最流暢的售票系統。不僅介面極具美感，『情感篩選器』更是驚艷，它真的幫我找到了一個能安放疲憊靈魂的數位迷宮展。”
          </p>
          <p><small>—林小姐 | 知名資深設計師—</small></p>
        </div>
      </div>
    </div>
  </div>
  <div class="container my-7">
    <div class="row">
      <div class="col-md-6">
        <img src="../assets/images/home-1-1.png" alt="home-1" class="img-fluid" />
      </div>
      <div class="col-md-4 m-auto text-center">
        <h4 class="mt-4">尋找命定展覽：情感篩選器</h4>
        <p class="text-muted">
          打破死板的分類。透過 VibeLink 獨家開發的情感標籤系統，使用者只需輸入當下的心情——無論是「渴望平靜」或是「尋求刺激」——AI
          將精準推薦最合適的靈魂棲息地。
        </p>
        <ul>
          <li>AI 情感標籤匹配</li>
          <li>視覺化展覽地圖</li>
        </ul>
      </div>
    </div>
    <div class="row flex-row-reverse justify-content-between mt-4">
      <div class="col-md-6">
        <img src="../assets/images/home-2-2.png" alt="home-2" class="img-fluid" />
      </div>
      <div class="col-md-4 m-auto text-center">
        <h4 class="mt-4">B2B 票務整合服務</h4>
        <p class="text-muted">
          針對企業用戶提供一站式解決方案。支持大宗票券採購、自動化電子票券派發與發票管理系統，為公司夥伴打造最高品質的藝文福利。
        </p>
        <p>“「VibeLink 幫我們解決了複雜的員工福利報帳流程，展覽選擇也非常具備專業質感。」”</p>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style lang="scss" scoped></style>
