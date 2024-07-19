<template>
    <div @click="goToCreation1" class="welcome-screen">
      <img src="../assets/欢迎界面.png" alt="欢迎界面">
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      goToCreation1() {
        this.$router.push('/creation1');
      }
    }
  }
  </script>
  
  <style scoped>
  .welcome-screen {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  </style>
  