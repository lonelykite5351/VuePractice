<template lang="pug">
div.recordList
  ul.record
    li(v-for="(rec,rid) in recordsGetData",
      :style="{'animation-delay':rid+'s'}"
      :key="rec.cata")
      span.date {{rec.date}} 
      span.price {{rec.price}} 元
      span.cata {{rec.cata}}
      button(@click="toggleRemove(rec)") 移除
  h3 總計 : {{total}}
</template>

<script>
export default {
    props: ["recordsGetData"],
    data(){
        return {
            
        }
    },
    methods: {
      toggleRemove(rec){
        console.log("丟出移除事件")
        this.$emit("removeListItem",{rec:rec})
      }
    },

    computed: {
      total(){
        return this.recordsGetData.reduce((total,recordsGetData)=>
          total+recordsGetData.price,0)
      }
    }
}
</script>

<style lang="sass">

@keyframes fadeIn
  0%
    opacity: 0
  100%
    opacity: 1


.recordList
  .record
    li
      display: flex
      border: 2px solid #000
      padding: 5px
      // text-align: center
      margin-bottom: 15px
      border-radius: 10px
      justify-content: center
      align-items: center
      animation: fadeIn 1s both
      
      .date
        flex: 6
        margin-left: 10px

      .price
        flex: 3
      
      .cata
        flex: 1
        font-weight: bold

      button
        margin-left: 15px
        margin-right: 20px
</style>