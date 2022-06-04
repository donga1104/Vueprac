<template>
  <div class="red-b">
    テストです
    {{ testData }}
  </div>
</template>

<script>
export default {
  name: 'TestComponent',  // お約束。ファイル名を記述
  data(){
    return{
      testData:'テストdataです'
    }
  }
}
</script>

<style scoped>
.red-b{
  border: 1px red solid;
}
</style>