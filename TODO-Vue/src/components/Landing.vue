<template>
    <div>
        <img src="https://sandboxcodes.com/images/purplelogo.svg">
        <h1>Welcome to Todue, the best way to TODO</h1>
        <router-link to="/login">Get started</router-link>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
