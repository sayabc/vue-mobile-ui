<template>
  <div class="list_wrapper">
    <ul>
      <li v-for="(item, index) in newRouters.temRouters"
          :key="item+index"
          @click="handleItemJump(item)"
          class="item_list">
        {{item.meta.title}}
      </li>
    </ul>

  </div>
</template>

<script>
import ListConfig from './components.list.json'

export default {
  name: 'List',
  data () {
    return {
      newRouters: []
    }
  },
  methods: {
handleRouters (lists) {
  let temRouters = []
  lists.map((sameTypeItems) => {
    sameTypeItems.items.map(item => {
      temRouters.push({
        name: item.name,
        path: item.path,
        component: require(`@/components/${item.name}${item.path}`),
        meta: {
          title: item.title || item.name
        }
      })
    })
  })
  return {
    temRouters,
    lists
  }
},
    handleItemJump (item) {
      this.$router.push({
        path: item.path
      })
    }
  },
  mounted () {
    this.newRouters = this.handleRouters(ListConfig)
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
.item_list {
  cursor: pointer;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 1px solid gray;
  border-radius: 4px;
  margin-bottom: 20px;
}
ul {
  padding-left: 4px;
  padding-right: 4px;
  margin-top: 4px;
}
</style>
