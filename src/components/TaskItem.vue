<template lang="pug">
    li {{ todo.title }}
</template>

<script>

export default {
    props: {
        todo: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>

</style>