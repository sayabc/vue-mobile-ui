<template>
  <div class="welcome_container">
    <p>仓库地址： <a href="https://github.com/sayabc/vue-mobile-ui/">vue-mobile-ui</a></p>
    <p>线上预览： <a href="https://sayabc.github.io/vue-mobile-ui">vue-mobile-ui</a></p>

    <router-link to="./alllist">本地预览地址</router-link>
  </div>
</template>

<style scoped>
.welcome_container {
  font-size: 20px;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
}
p {
  margin-bottom: 20px;
}
</style>
