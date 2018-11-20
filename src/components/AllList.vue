<template>
  <div class="list_wrapper">
    <ul v-for="(classItem, classIndex) in newRouters.lists" :key="classIndex">
      <p class="list_type">{{classIndex+1}}: {{classItem.componentsType}}</p>
      <li v-for="(item, index) in classItem.items"
          :key="item+index"
          @click="handleItemJump(item)"
          class="item_list">
        {{item.name}}
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
      lists.map(sameTypeItems => {
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
  min-height: 200px;
}
.item_list {
  cursor: pointer;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 1px solid gray; /*no*/
  border-radius: 4px;
  margin-bottom: 20px;
}
ul {
  padding-left: 4px;
  padding-right: 4px;
  margin-top: 4px;
}
.list_type {
  text-align: left;
  margin-bottom: 20px;
}
.list_wrapper>ul {
  margin-bottom: 40px;
}
.list_wrapper>ul>p {
  font-size: 28px;
}
.list_wrapper>ul:not(:first-child) {
  border-top: 1px dotted #000; /*no*/
  padding-top: 20px;
}
</style>
