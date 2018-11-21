<template>
  <div>

    <div class="intro">
      <h2>Dialog</h2>
      <p>什么是Dialog?</p>
    </div>

    <div class="compons_detail_list">
      <ul>
        <li @click="handleDialog">标题+内容</li>
      </ul>
    </div>

    <div class="full_mask" v-if="showFullMask">
      <div class="mask_body_container dialog_container">
        <h4 class="mask_container_title dialog_title">Dialog Title!</h4>
        <p class="mask_container_body dialog_boy">
          提示信息可以单行、多行，控制住
        </p>
        <div class="mask_comtainers_btns">
          <span class="mask_btn mask_btn_flex" @click="handleConfirm">确认</span>
          <span class="mask_btn mask_btn_flex" @click="handleDialog">取消</span>
        </div>
      </div>
    </div>

    <div class="notes">
      <p>Dialog 应用场景: 操作需要用户确认或者取消 、 需要用户输入信息</p>
      <p>展现形式: 标题+内容+按钮(确认)、标题+内容+按钮(主操作+辅操作)、内容+按钮(知道了)、标题+内容+按钮(知道了)；内容可单行可多行，尽量简短</p>
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
    handleDialog () {
      this.showFullMask = !this.showFullMask
    },
    handleConfirm () {
      this.showFullMask = false
      // 处理逻辑
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
  background: rgba(0,0,0,.6); /*dialog新添加*/
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
.mask_container_title {
  text-align: center;
  font-size: 14px;
  margin-top: 20px;
}
.mask_container_body {
  text-align: left;
  border-bottom: 1px solid gray; /*no*/
}
.dialog_container {
  /* padding: 20px 40px; */
  padding: 0;
  width: 66%;
}
.dialog_boy {
  padding-top: 45px;
  padding-bottom: 45px ;
  text-align: center;
  box-sizing: border-box;
}
.mask_comtainers_btns {
  display: flex;
  margin-bottom: 4px;
  padding-top: 10px;
  padding-bottom: 10px;
  box-sizing: border-box;
}
.mask_btn {
  flex: 1;
  padding: 6px 10px;
}
.mask_btn:nth-child(1) {
  border-right: 1px solid gray; /*no*/
}
.mask_btn_blank {
  flex: 1;
}
.notes {
  margin-top: 60px;
  padding: 20px;
  text-align: left;
  border: 1px dotted gray; /*no*/
  border-radius: 10px;
}
</style>
