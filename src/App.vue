<template lang="pug">
  #app
    h1 Todo
    AddTodo(@add-todo='addTodo')
    hr
    select(v-model="filter")
      option(value="all") All
      option(value="completed") Completed
      option(value="not-completed") Not completed
    hr
    Loader(v-if="loading")
    TodoList(
      v-else-if="filteredTodos.length"
      :todos="filteredTodos"
      @remove-todo='removeTodo'
      )
    p(v-else) No todos
</template>

<script>
import Loader from '@/components/Loader'
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'
export default {
  name: 'App',
  data() {
    return {
      todos: [],
      loading: true,
      filter: 'all'
    }
  },
  components: {
    TodoList,
    AddTodo,
    Loader
  },
  computed:{
    filteredTodos(){
      if(this.filter === 'all'){
        return this.todos
      }
      if(this.filter === 'completed'){
        return this.todos.filter(t => t.completed)
      }
      if(this.filter === 'not-completed'){
        return this.todos.filter(t => !t.completed)
      }
    }
  },
  methods:{
    removeTodo(id){
      this.todos = this.todos.filter(t => t.id !== id)
    },
    addTodo(todo){
      this.todos.push(todo)
    }
  },
  mounted(){
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
    .then(response => response.json())
    .then(json => {
      setTimeout(() => {
        this.todos = json
        this.loading = false
      }, 1000)

    })
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
