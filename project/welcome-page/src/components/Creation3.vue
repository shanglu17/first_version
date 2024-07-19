<template>
    <div class="creation3-screen">
      <div class="camera-interface">
        <button @click="closeCamera" class="close-button">×</button>
        <div class="avatars">
          <!-- 显示用户选择的头像 -->
          <div v-for="avatar in avatars" :key="avatar.id" class="avatar-item">
            <img :src="avatar.image" :alt="avatar.name">
            <p>{{ avatar.name }}</p>
          </div>
        </div>
        <button class="capture-button"></button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        avatars: [
          { id: 1, name: 'Hiyori', image: 'path/to/hiyori.png' },//路径需要更改
          { id: 2, name: '冲', image: 'path/to/chong.png' },
          // ...其他头像
        ]
      }
    },
    methods: {
      closeCamera() {
        this.$router.push('/creation2');
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add styles here */
  </style>
  