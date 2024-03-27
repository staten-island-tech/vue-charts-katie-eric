
<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <h1 class="title">Occurences of 5 Causes of Death from 2007 to 2014</h1> <br>
  <nav>
        <RouterLink to="/pie">Click me!</RouterLink>
        <RouterLink to="/">More info</RouterLink>
        <!-- <RouterLink to="/options">Options Graph</RouterLink> -->
      </nav>
      <br>
      <Router-view />
</template>


<style>
nav{
  text-align: center;
  margin-bottom: 50px;
}
</style>

<style>
.title{
  text-align: center;
  margin-bottom: 10px;
}
body{
  background-color: #fcfcfd;
}

</style>