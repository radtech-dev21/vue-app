<template>
<div>
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <router-link to="/" class="nav-link">Home</router-link>
       <router-link to="about-us" class="nav-link">About Us</router-link>
      <router-link to="login" class="nav-link">Login</router-link>
      <router-link to="register" class="nav-link">Register</router-link>
    </b-navbar-nav>
  </b-navbar>
</div>
</template>
<script>
export default {
  name: 'Navbar',
  props: {
    msg: String
  }
}
</script>
<style>
</style>