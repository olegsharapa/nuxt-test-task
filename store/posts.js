export const state = () => ({
  posts: []
});

export const mutations = {
  setPosts(state, posts) {
    state.posts = posts;
  },
  deletePost(state, postId) {
    state.posts = state.posts.filter(post => post.id !== postId);
  }
};

export const actions = {
  async fetch({ commit }) {
    const posts = await this.$axios.$get(
      "https://jsonplaceholder.typicode.com/posts?_limit=15"
    );
    commit("setPosts", posts);
  },
  async delete({ commit }, postId) {
    await this.$axios.$delete(
      "https://jsonplaceholder.typicode.com/posts/" + postId
    );
    commit("deletePost", postId);
  }
};

export const getters = {
  posts: state => state.posts
};
