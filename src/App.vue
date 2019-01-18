<template>
  <div id="app">
    <p class="header" v-if="this.$route.name !== 'AllList'" @click="handleBack"> <span class="header_back" v-if="this.$route.name !== 'HelloWorld'">返回</span> <span class="header_title">{{title}}</span></p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      title: 'Weclome'
    }
  },
  methods: {
    handleBack () {
      this.$router.back()
    }
  },
  watch: {
    $route () {
      this.title = this.$route.name
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 24px;
}
li {
  list-style-type: none;
}
h1,
h2,
h3,
h4 {
  display: block;
  font-size: 1.5em;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  font-weight: bold;
}
p {
  display: block;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
}
ul,
menu,
dir {
  display: block;
  list-style-type: disc;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0;
}

.header {
  height: 30px;
  line-height: 30px;
  margin-bottom: 20px;
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px dotted gray; /*no*/
}
.header_back {
  position: absolute;
  left: 20px;
}

input {
  border: none;
}

</style>
