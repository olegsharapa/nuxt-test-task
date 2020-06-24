<template>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <nuxt-link no-prefetch class="navbar-brand" to="/">Posts App</nuxt-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <nuxt-link
          exact
          no-prefetch
          to="/"
          active-class="active"
          class="nav-link"
          >Home</nuxt-link
        >
        <nuxt-link
          no-prefetch
          to="/about"
          active-class="active"
          class="nav-link"
          >About</nuxt-link
        >
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
