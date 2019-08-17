<template>
    <div id="firstcomponent">
        <h1>I am a title</h1>
        <a>written by {{author}}</a>
        <router-link to="/second">点击跳转第二个页面</router-link>
    </div>
</template>

<script>
export default {
    data(){
        return {
            author:"李秸康"
        }
    }

}
</script>

<style>

</style>