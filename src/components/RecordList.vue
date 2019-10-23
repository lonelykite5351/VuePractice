<template lang="pug">
  ul.record
    li(v-for="record in records")
      span {{record.date}}
      span {{record.price}} 元
      span {{record.cata}}
</template>

<script>
export default {
    props: ["records"],
    data(){
        return {
            
        }
    }
}
</script>

<style lang="sass">

</style>