<template>
  <div class="list_wrapper">
    <h3>请在移动端查看</h3>

  </div>
</template>

<script>
import lists from './components.list.json'

export default {
  name: 'List',
  data () {
    return {
    }
  },
  mounted () {
    console.log(lists)
  }
}
</script>

<style scoped>
.list_wrapper {
  width: 80%;
  margin: 0 auto;
  border: 1px solid gray;
  border-radius: 4px;
  min-height: 600px;
}
</style>
