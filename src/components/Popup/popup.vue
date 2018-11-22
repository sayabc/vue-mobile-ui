<template>
  <div>

    <div class="intro">
      <h2>Popup弹层</h2>
      <p>什么是Popup弹层?</p>
    </div>

    <div class="compons_detail_list">
      <ul>
        <li @click="handleShowPop">选项</li>
      </ul>
    </div>

    <div class="full_mask" v-if="showFullMask">
      <div class="mask_body_container">
        <p class="mask_container_body popup_body">
          提示信息最好单行
        </p>
      </div>
    </div>

    <div class="notes">
      <p>Popup弹层 应用场景: 打开本地文件、某些有特殊爱好产品的提示、侧边栏</p>
      <p>展现形式: 主要是位置和动画</p>
      <p>展现方式: 左侧、右侧、上方、下方、动画可以自定义</p>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      showFullMask: false
    }
  },
  methods: {
    handleShowPop () {
      this.showFullMask = true
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
  background-color: #fff;
}

.popup_body {
  text-align: left;
}
.notes {
  margin-top: 60px;
  padding: 20px;
  text-align: left;
  border: 1px dotted gray; /*no*/
  border-radius: 10px;
}
</style>
