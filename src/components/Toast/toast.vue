<template>
  <div>

    <div class="intro">
      <h2>Toast</h2>
      <p>什么是Toast?</p>
    </div>

    <div class="compons_detail_list">
      <ul>
        <li @click="handleToast">标题+内容</li>
      </ul>
    </div>

    <div class="full_mask" v-if="showFullMask">
      <div class="mask_body_container">
        <h4 class="toast_title">提示!</h4>
        <p class="toast_body">
          提示信息最好单行
        </p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      showFullMask: false,
      timer: null
    }
  },
  methods: {
    handleToast () {
      this.showFullMask = true
      if (this.timer) {
        this.timer = null
      }
      this.timer = setTimeout(() => {
        this.showFullMask = false
      }, 2000)
    }
  }
}
</script>

<style scoped>
.intro {
  text-align: left;
  margin-bottom: 40px;
}

.compons_detail_list {
  padding: 10px;
}
ul>li {
  width: 300px;
  height: 50px;
  line-height: 50px;
  border: 1px solid gray; /*no*/
  border-radius: 6px;
  margin: 0 auto;
}
.full_mask {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255,255,255,.5);
}
.mask_body_container {
  border: 1px solid gray; /*no*/
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 8px 16px;
  border-radius: 6px;
}
.toast_title {
  text-align: center;
  font-size: 14px;
}
.toast_body {
  text-align: left;
}
</style>
