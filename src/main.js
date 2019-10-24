import Vue from 'vue'
import App from './App.vue'
// 加入元件
import RecordList from './components/RecordList'
// 加入元件
Vue.component("RecordList",RecordList)
new Vue({
  el: '#app',
  render: h => h(App)
})
