<template>
  <div>
    <h2>Posts</h2>
    <b-list-group>
      <b-list-group-item
        v-for="post in posts"
        :key="post.id"
        class="flex-column align-items-start"
      >
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{ post.title }}</h5>
          <b-button
            variant="danger"
            class="delete-btn"
            @click="deletePost(post.id)"
            >&times;</b-button
          >
        </div>

        <p class="mb-1">{{ post.body }}</p>
        <small class="user-name-link" @click.prevent="openUser(post.userId)">
          {{ users.filter(user => user.id === post.userId)[0].name }}
        </small>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  async fetch({ store }) {
    if (store.getters["users/users"].length === 0) {
      await store.dispatch("users/fetch");
    }
    if (store.getters["posts/posts"].length === 0) {
      await store.dispatch("posts/fetch");
    }
  },
  computed: {
    users() {
      return this.$store.getters["users/users"];
    },
    posts() {
      return this.$store.getters["posts/posts"];
    }
  },
  methods: {
    deletePost(postId) {
      this.$store.dispatch("posts/delete", postId);
    },
    openUser(userId) {
      this.$router.push("/user/" + userId);
    }
  }
};
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
}
.list-group {
  margin-bottom: 20px;
}
.list-group-item {
  padding-right: 45px;
}
.delete-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  padding: 0;
}
.user-name-link:hover {
  cursor: pointer;
  /* text-decoration: underline; */
  color: blue;
}
</style>
