<template lang="pug">
    div
        input(v-model="title")
        button(v-on:click = 'createTodo') create
</template>

<script>
export default {
    data(){
        return {
            title: '',
            randNumber: ''
        }
    },
    methods:{
        createTodo(){
            if(this.title.trim()){
                const newTodo = {
                    id: Date.now(),
                    title: this.title,
                    completed: false
                }
                
                this.$emit('add-todo', newTodo)
                this.title = ''
            }
        },
        
    }
}
</script>

<style>

</style>