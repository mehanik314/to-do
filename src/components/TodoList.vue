<template lang="pug">
    div
        ul
            TodoItem(v-for="(todo, i) in todos" 
            :todo="todo"
            :index="i"
            :key="todo.id"
            v-on:remove-todo="removeTodo"
            )
            
</template>

<script>
import TodoItem from '@/components/TodoItem'
export default {
    props: ['todos'],
    components:{
        TodoItem,
    },
    methods:{
        removeTodo(id){
            this.$emit('remove-todo',id)
        }
    }
}
</script>

<style>

</style>