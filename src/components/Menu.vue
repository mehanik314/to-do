<template lang="pug">
    .Menu
        .wrapper-links
            .links
                router-link(to='/') Home
            .links
                router-link(to='/Tasks') Tasks
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.Menu{
    border: 1px black solid
}
.links{
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    border: 1px black solid;
    width: 100px;
    height: 50px;
}
.wrapper-links{
    display: flex;
    flex-direction: row;
    column-gap: 20px;
    justify-content: center;   
}
a{
    text-decoration: none;
}
</style>