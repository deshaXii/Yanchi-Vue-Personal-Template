


import Vue from 'vue'
import App from './App.vue'

// const { $, jQuery } = require('jquery');
// global.$ = $;
// global.jQuery = jQuery;
// import( '@/assets/js/bootstrap.min.js');

// // import( '@/assets/js/modernizr.min.js');
// // require( '@/assets/js/jquery.hoverdir.js');
// // require( '@/assets/js/jquery.mixitup.js');
// // require( '@/assets/js/lity.min.js');
// // require( '@/assets/js/owl.carousel.min.js');
// // require( '@/assets/js/custom.js');


Vue.filter('25letter', val => {
  if(!val || typeof(val) != 'string') return ''
  val = val.slice(0,25)
  return val + '...'
})



import store from './store'
import router from './router'



// import i18n translater
import i18n from './i18n'



const lang = localStorage.getItem('lang')
// axios.defaults.baseURL = `http://localhost:3000/`
// axios.defaults.headers['Accept-Language'] = lang
document.documentElement.lang = lang


// router.beforeEach( (to, from, next) => {
//   let lang = to.params.lang;
//   if ( !lang ) {
//     lang = 'en'
//   }
//   i18n.locale = lang
//   next()
// })


Vue.config.productionTip = false

new Vue({
  store,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
