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
      // console.log(require(`@/components/${item.name}${item.path}`))
      temRouters.push({
        path: item.path,
        name: item.name,
        component: require(`@/components/${item.name}${item.path}`).default,
        // coomponent:  () => import(/* webpackChunkName: "Home" */ `${item.name}`), // 注释部分设置默认打包文件名
        // component: r => require.ensure([], () => r(require('@/components/' + item.name + item.path)), `${item.name}`), // no
        // component: r => require.ensure([], () => r(require('../components/Toast/toast.vue')), 'Toast'), // yes
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

let newRouters = handleRouters(ListConfig)

let extraComponents = [
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

export default new Router({
  routes: [].concat(extraComponents, newRouters.temRouters)
})
