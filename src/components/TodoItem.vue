<template lang="pug">
    li.todoitem
        span(v-bind:class="{done: todo.completed}")
            input(type='checkbox' class="check" v-on:change="todo.completed = !todo.completed")
            strong(class="id") {{ index + 1 }} {{todo.title}}
        button.btn(v-on:click="$emit('remove-todo',todo.id)") &#9766;
</template>

<script>
export default {
    props:{
        todo:{
            type: Object,
            required: true,
        },
        index: Number
    },
}
</script>

<style scoped>
.todoitem{
    border: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: .5rem 2rem;
    margin-bottom: 1rem;
}
.id{
    margin-right: 20px;
}
.btn{
    background: red;
    border-radius: 20px;
    margin-left: 10px;
}
.check{
    margin-right: 10px;
}
.done{
    text-decoration: line-through;
}
</style>