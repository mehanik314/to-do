<template lang="pug">
  .home
    
    .wrapper-tasks-list
      HelloWorld
    .list
      List(v-bind:todos="todos")
</template>

<script>
import HelloWorld from '../components/HelloWorld'
import TaskItem from '../components/TaskItem'
import List from '../components/List'
import AddTask from '../components/AddTask.vue'
export default {
    data() {
    return {
      todos: [
        {id: 1, title: 'Задача 1', completed: false},
        {id: 2, title: 'Задача 2', completed: false},
        {id: 3, title: 'Задача 3', completed: false},
      ]
    }
  },
    components: {
        HelloWorld,
        TaskItem,
        List,
        AddTask,
    }
}
</script>

<style>
.home{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
.list{
  border: 1px black solid;
  width: 900px;
  margin: 10px auto 0px auto;
}
.wrapper-tasks-list{
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50px;
  width: 900px;
  margin: 50px auto 0px auto;
  border: 1px black solid;
}
</style>