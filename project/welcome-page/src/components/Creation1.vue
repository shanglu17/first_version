<template>
    <div class="creation1-screen">
      <div class="header">
        <img :src="userAvatar" alt="User Avatar" class="avatar">
        <div class="user-info">
          <h3>{{ userName }}</h3>
          <p>你今天还没有发表动态哦~</p>
        </div>
        <button class="notification-button">通知</button>
      </div>
      <div class="history">
        <h4>历史记录</h4>
        <div v-for="item in historyItems" :key="item.id" class="history-item">
          <img :src="item.image" :alt="item.name">
          <p>{{ item.name }}</p>
        </div>
      </div>
      <div class="recently-deleted">
        <h4>最近删除</h4>
        <div v-for="item in deletedItems" :key="item.id" class="deleted-item">
          <img :src="item.image" :alt="item.name">
          <p>{{ item.name }}</p>
        </div>
      </div>
      <div class="add-button" @click="goToCreation2">+</div>
      <div class="footer">
        <button>创作</button>
        <button>自定义</button>
        <button>社区</button>
        <button>我</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userAvatar: 'path/to/avatar.png',
        userName: 'Lynn Robinson',
        historyItems: [
          { id: 1, name: '未命名作品1', image: 'path/to/image1.png' },
          { id: 2, name: '未命名作品2', image: 'path/to/image2.png' },
          // ...more items
        ],
        deletedItems: [
          { id: 1, name: '未命名作品1', image: 'path/to/image1.png' },
          { id: 2, name: '未命名作品2', image: 'path/to/image2.png' },
          // ...more items
        ]
      }
    },
    methods: {
      goToCreation2() {
        this.$router.push('/creation2');
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add styles here */
  </style>
  