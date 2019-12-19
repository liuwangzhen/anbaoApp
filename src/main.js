import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import 'vant/lib/index.css';
// import axios from 'axios'
import Vant from 'vant';
Vue.config.productionTip = false
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Vant)
// import Element from 'element-ui';
// Vue.use(Element, { size: 'small', zIndex: 3000 });
new Vue({
  router,store,
render: h => h(App)
}).$mount('#app')