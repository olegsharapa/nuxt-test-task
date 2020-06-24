<template>
  <div>
    <h2>{{ user.name }}</h2>
    <p><b>name:</b> {{ user.username }}</p>
    <p><b>email:</b> {{ user.email }}</p>
    <p><b>phone:</b> {{ user.phone }}</p>
    <p><b>website:</b> {{ user.website }}</p>
  </div>
</template>

<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  async asyncData({ $axios, params }) {
    const user = await $axios.$get(
      "https://jsonplaceholder.typicode.com/users/" + params.id
    );
    return { user };
  }
};
</script>
