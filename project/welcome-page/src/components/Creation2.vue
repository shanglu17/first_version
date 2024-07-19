<template>
  <div class="creation2-screen">
    <div class="header">
      <img :src="userAvatar" alt="User Avatar" class="avatar">
      <div class="user-info">
        <h3>{{ userName }}</h3>
        <p>你今天还没有发表动态哦~</p>
      </div>
      <button class="notification-button">通知</button>
    </div>
    <div class="camera-permission">
      <p>！还差一步</p>
      <p>打开摄像头权限</p>
      <p>就可以让模型绑定您的面部表情啦</p>
    </div>
    <button @click="openCamera" class="go-button">GO-></button>
    <button @click="goBack" class="no-button"><-NO</button>
    <input type="checkbox" id="reminder" name="reminder">
    <label for="reminder">下次不再提醒</label>
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
      userName: 'Lynn Robinson'
    }
  },
  methods: {
    openCamera() {
      // 模拟调用摄像头的逻辑
      this.$router.push('/creation3');
    },
    goBack() {
      this.$router.push('/creation1');
    }
  }
}
</script>

<style scoped>
/* Add styles here */
</style>

  