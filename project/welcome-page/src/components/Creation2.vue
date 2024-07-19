<template>
    <div class="creation2-screen">
      <button @click="openCamera">GO-></button>
      <button @click="goBack"><-NO</button>
      <div class="upload-button" @click="openAlbum">从相册导入</div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      openCamera() {
        // 调用摄像头
      },
      goBack() {
        this.$router.push('/creation1');
      },
      openAlbum() {
        // 打开相册
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add styles here */
  </style>
  