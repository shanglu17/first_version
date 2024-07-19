<template>
    <div class="welcome" @click="goToNextPage">
      <img src="@/assets/welcome.png" alt="Welcome" />
    </div>
  </template>
  
  <script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  
  @Component
  export default class Welcome extends Vue {
    goToNextPage() {
      this.$router.push('/next');
    }
  }
  </script>
  
  <style scoped>
  .welcome {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #fff;
  }
  .welcome img {
    max-width: 100%;
    max-height: 100%;
  }
  </style>
  