<template>
  <div id="secondcomponent">
      <h1>I am another page</h1>
      <a>written by {{author}}</a>
      <p>李秸康自学Vue开始</p>

  </div>
</template>

<script>
export default {
    data(){
        return {
            author:"李秸康",
            articles:[]
        }
    }
}
</script>

<style>

</style>