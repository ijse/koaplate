<template>
  <div class="app">
    <h2> {{ name }} </h2>
    <p> ok~ </p>
  </div>
</template>
<script lang="ts">
  let greeting:string = 'Hello world!'
  export default {
    name: 'App',
    data: () => ({
      name: greeting
    })
  }
</script>
<style scoped>
  @import './style.css';
  .app {
    position: relative;
    overflow: hidden;

    & p {
      color: inherit;
    }
  }
</style>
