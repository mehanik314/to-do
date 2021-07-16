<template lang="pug">
    .addtask__background
        .wrapper__form
            input(v-model="message")
            input(v-model="title")
            button(v-on:click = "IsVisible == false") fasdf
</template>
<script>
export default {
    props: {
        isVisible: {
            type: Boolean,
            default: false,
        }
    },
    data() {
    return {
     
    }
  },
}
</script>

<style>
.addtask__background{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: red;
}
</style>