<template lang="pug">
    div
        ul  
            TaskItem(
                v-for="todo of todos"
                v-bind:todo="todo"
            )
</template>

<script>
import TaskItem from '../components/TaskItem'
export default {
    props:['todos'],
    components:{
        TaskItem,
    }
}
</script>

<style>

</style>