<template>
  <article class="prlist">
    <p v-if="!list"> Loading... </p>
    <table v-else>
      <thead>
        <th> Title </th>
        <th> Branch </th>
      </thead>
      <tbody>
        <tr v-for="pr in list">
          <td>
            <a :href="pr.html_url">{{ pr.title }}</a>
            @{{ pr.user.login }}
            <span class="label" v-for="label in pr.issue.labels"
              :style="`background-color: #${label.color};`">
              <b>{{ label.name }}</b>
            </span>
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
      list: null
    }),
    created () {
      this.load()
    },
    methods: {
      async load () {
        this.list = null
        const result = await axios.get('/github/prs')
        this.list = result.data
      }
    }
  }
</script>
<style scoped>
  table {
    width: 100%;
    font-size: 14px;
    border: none;
  }
  td, th {
    padding: 5px;
  }
  .label {
    padding: 1px 3px;
    & b {
      color: #fff;
      mix-blend-mode: difference;
    }
  }

</style>
