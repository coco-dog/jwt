<template>
  <div class="about">
    欢迎回来！{{admin.username}}
    <div id="nav">
      <router-link to="/">首页</router-link>
    </div>
    <a href="">资源1</a> |
    <a href="">资源2</a> |
    <a href="">资源3</a> |
    <a href="">资源4</a> |
    <a href="">资源5</a> |
    <a href="">资源6</a>
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