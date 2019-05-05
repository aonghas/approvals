import Vue from 'vue'
import VueRouter from'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'

// Import components
import App from './App.vue'

import routes from './routes';

import titleMixin from './mixins/titleMixin'

Vue.use(ElementUI, { locale })
Vue.use(VueRouter)
Vue.mixin(titleMixin)

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<App />' }

// const router = new VueRouter({
//   routes // short for `routes: routes`
// })

const router = new VueRouter({ routes });

router.afterEach((to, from) => {
  Vue.nextTick( () => {
    console.log(to)
    if (to.params.id) {
      document.title = to.meta.title ?  to.meta.title + ' (' + to.params.id + ') | Digital Signature': 'Digital Signature';
    } else {
      document.title = to.meta.title ? to.meta.title + ' | Digital Signature' : 'Digital Signature';
    }
  });
})

const app = new Vue({
  router,
  render: h => h(App),
}).$mount('#app');



