<template lang="pug">
  div
    button.btn(@click="$emit('setIsVisible',true)") Добавить
    button.btn удалить
    button.btn изменить
</template>

<script>
import AddTask from '../components/AddTask.vue'
export default {
    components:{
      AddTask
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.btn{
  
  margin-right: 20px;
  height: 45px;
  width: 100px;
}
</style>
