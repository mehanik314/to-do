<template lang="pug">
  #app
      AddTask(v-if = "isVisible == true" @setIsVisible="setIsVisible")
      Menu
      .view-content
        <router-view></router-view>
</template>



<script>
import HelloWorld from './components/HelloWorld.vue'
import Menu from './components/Menu.vue'
import AddTask from './components/AddTask.vue'
export default {
  name: 'App',
  data: () => ({
    isVisible: false,
  }),
  components: {
    HelloWorld,
    Menu,
    AddTask,
  },
  methods: {
    setIsVisible(value){
      this.isVisible = value
      alert(this.isVisible)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
