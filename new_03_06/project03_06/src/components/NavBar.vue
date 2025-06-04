<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navbar">
    <div class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item"></a>

        <RouterLink to="/login" class="navbar-item">Login</RouterLink>
        <RouterLink to="/registration" class="navbar-item">Registration</RouterLink>
      </div>
    </div>
  </nav>
</template>
