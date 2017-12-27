<template>
  <div class="app">
    <PRList></PRList>
  </div>
</template>
<script>
  import PRList from './prlist'
  export default {
    name: 'App',
    components: {
      PRList
    }
  }
</script>
<style scoped>
  .app {
    position: relative;
    overflow: hidden;

    & p {
      color: inherit;
    }
  }
</style>
