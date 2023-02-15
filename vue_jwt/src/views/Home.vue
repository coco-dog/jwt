<template>
  <div class="home">
    欢迎回来！{{admin.username}}
    <div id="nav">
      <router-link to="/about">下载</router-link>
    </div>
    <h1>这是首页</h1>
  </div>
</template>

<script>

export default {
  data(){
    return {
      admin: ''
    }
  },
  created() {
    this.admin = JSON.parse(window.localStorage.getItem('access-admin'))
  }
}
</script>
