<template>
  <article class="prlist">
    <table>
      <tbody>
        <tr v-for="pr in list">
          <td>
            <a :href="pr.html_url">{{ pr.title }}</a>
            @{{ pr.user.login }}
          </td>
          <td> {{ pr.head.ref }} </td>
        </tr>
      </tbody>
    </table>
  </article>
</template>
<script>
  import * as axios from 'axios'
  export default {
    name: 'PRList',
    data: () => ({
      list: Array
    }),
    async created () {
      const result = await axios.get('/github/prs')
      this.list = result.data
    }
  }
</script>
<style>

</style>
