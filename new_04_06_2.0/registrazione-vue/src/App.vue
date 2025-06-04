<template>
  <nav>
    <router-link to="/login">Login</router-link>
    <router-link to="/register">Registrazione</router-link>
  </nav>
  <main>
    <router-view />
  </main>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
}

nav {
  background-color: #42b983;
  padding: 20px;
  text-align: center;
}

nav a {
  color: white;
  margin: 0 15px;
  text-decoration: none;
  font-weight: bold;
}

main {
  padding: 20px;
}
</style>


