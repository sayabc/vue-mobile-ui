import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import List from '@/components/List'

import ListConfig from '@/components/components.list.json'

Vue.use(Router)

const handleRouters = (lists) => {
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
}

const newRouters = handleRouters(ListConfig)

const extraComponents = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }, {
    path: '/list',
    name: 'List',
    component: List
  }
]

newRouters.temRouters.concat(extraComponents)

console.log('newRouters.temRouters', newRouters.temRouters)

console.log('extraComponents', extraComponents)
export default new Router({
  routes: newRouters.temRouters
})
