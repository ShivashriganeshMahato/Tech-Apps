<template>
    <div id="loginFormContainer">
        <div id="loginForm">
            <img src="https://sandboxcodes.com/images/purplelogo.svg" width="100" height="100">
            <br>
            <input id="loginFormInput" placeholder="Please enter your username">
            <router-link id="loginFormBtn" to="/list" onclick="loginSubmit()">Enter</router-link>
        </div>
    </div>
</template>

<script>
function loginSubmit() {
    var username = $id("loginFormInput").value;
    if (!localStorage[username]) {
        localStorage[username] = JSON.stringify({
            username: username,
            lists: []
        });
    }
    curUser = JSON.parse(localStorage[username]);
}

export default {
  name: 'Landing',
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
