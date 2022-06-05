<template>
<div>
  <button @click="increment">+</button>
  <button @click="addCount">+10</button>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    // ----- 直接mutatationを呼び出す ----- //
        // increment(){
        //   // store/index.jsのmutationsで定義したincrementを呼び出す
        //   this.$store.commit('increment')
        // },
        // addCount(){
        //   this.$store.commit('addCount',{
        //     value: 10   // payload
        //   })
        // }
    // ----- 直接mutatationを呼び出す ----- //

    // Actionを呼び出す
    increment(){
      this.$store.dispatch('incrementAction')
    },
    addCount() {
      this.$store.dispatch('addCountAction', {
        value:10
      })
    }
  }
}
</script>