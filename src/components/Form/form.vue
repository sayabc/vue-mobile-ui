<template>
  <div>

    <div class="intro">
      <h2>Form</h2>
      <p>表单内容 input select radio .etc</p>
    </div>

    <div class="compons_detail_list">
      <div class="list list_input">
        <p class="list_title">1. Input</p>
        <div class="input_container">
          <label for="input_name">姓名: </label>
          <input type="text" placeholder="请输入姓名">
        </div>
      </div>
    </div>

    <div class="notes">
      <p>Form 元素 应用场景: 用户输入信息类型、单选、多选等</p>
      <p>Form 展现形式: 往往会跟随着很多的校验(长度&&格式)、提示(正确||错误)，也有带说明、带图标等形式</p>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {

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
.list {
  text-align: left;
}
.input_container {
  padding: 10px;
  border-top: 1px solid gray; /*no*/
}
.list_title {
  padding-bottom: 20px;
}

.notes {
  margin-top: 60px;
  padding: 20px;
  text-align: left;
  border: 1px dotted gray; /*no*/
  border-radius: 10px;
}
</style>
