<template lang="pug">
#app
  h1 記帳程式
  hr
  RecordList(v-bind:recordsGetData="records" 
            @removeListItem = "List1RemoveItem")
  h2 第二個人
  RecordList(v-bind:recordsGetData="records2"
            @removeListItem = "List2RemoveItem")
  hr
  input(v-model="newRec.date" placeholder="日期")
  input(v-model.number="newRec.price" placeholder="價格")
  input(v-model="newRec.cata" placeholder="種類")
  button(@click="addRec") 加入資料

</template>

<script>
// import RecordList from './components/RecordList.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to lonelykite Vue.js App',
      newRec: {},
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
          price: 2000,
          cata: "iPhone 8"
        },
        {
          date: "2019/10/23",
          price: 3000,
          cata: "iPhone 9"
        },
        {
          date: "2019/10/23",
          price: 425,
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

  methods: {
    List1RemoveItem(obj){
      console.log(obj)
      console.log("收到事件")
      this.records = this.records.filter(item=>item !== obj.rec)
    },
    List2RemoveItem(obj){
      console.log(obj)
      console.log("收到事件2")
      this.records2 = this.records2.filter(item=>item !== obj.rec)
    },
    addRec(){
      this.records.push(this.newRec)
      this.newRec={}
    }
  },

  // components: {
  //   RecordList: RecordList
  // }

}
</script>

<style lang="sass">

</style>
