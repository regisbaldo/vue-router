<template>
  <div class="users">
    <div class="loading" v-if="loading">Loading...</div>
    <div class="error" v-if="error">
      <p>{{error}}</p>
      <br />
      <button @click.prevent="fetchdata">Try again</button>
    </div>
    <ul v-if="users">
      <li v-for="{name, email, index} in users" v-bind:key="index">
        <strong>Name:</strong>
        {{name}},
        <strong>E-mail:</strong>
        {{email}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      loading: false,
      users: null,
      error: null
    };
  },
  created() {
    this.fetchdata();
  },
  methods: {
    fetchdata() {
      this.error = this.users = null;
      this.loading = true;
      axios
        .get("api/users")
        .then(response => {
          this.loading = false;
          this.users = response.data.data;
        })
        .catch(error => {
          this.loading = false;
          this.error = error.response.data.message || error.message;
        });
    }
  }
};
</script>

<style>
</style>