<template>
  <div class="app">
    <h2> {{ name }} </h2>
    <p> ok~ </p>
  </div>
</template>
<script>
  export default {
    name: 'App',
    data: () => ({
      name: 'Hello app.'
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
