<template lang="pug">
#app
  h1 記帳程式
  hr
  RecordList(v-bind:records="records")
  h2 第二個人
  RecordList(v-bind:records="records2")

</template>

<script>
import RecordList from './components/RecordList.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to lonelykite Vue.js App',
      records: [
        {
          date: "2019/10/22",
          price: 100,
          cata: "Apple"
        },
        {
          date: "2019/10/22",
          price: 200,
          cata: "iPhone 8"
        },
        {
          date: "2019/10/22",
          price: 300,
          cata: "iPhone 9"
        },
        {
          date: "2019/10/22",
          price: 400,
          cata: "iPhone 10"
        },
        {
          date: "2019/10/22",
          price: 500,
          cata: "iPhone 11"
        },
      ],
      records2: [
        {
          date: "2019/10/23",
          price: 150,
          cata: "Apple"
        },
        {
          date: "2019/10/23",
          price: 20000,
          cata: "iPhone 8"
        },
        {
          date: "2019/10/23",
          price: 3000,
          cata: "iPhone 9"
        },
        {
          date: "2019/10/23",
          price: 4258570,
          cata: "iPhone 10"
        },
        {
          date: "2019/10/23",
          price: 55400,
          cata: "iPhone 11"
        },
      ]
    }
  },
  components: {
    RecordList: RecordList
  }
}
</script>

<style lang="sass">
#app 
  
</style>
