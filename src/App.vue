<template>
  <div id="app">
    <div class="grid-custom-cols bg-[#fff000]">
      <div class="text-3xl text-center self-center">Logo</div>
      <div class=""><Nav/></div>
      <div><Sidebar/></div>
      <div><Content/></div>
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Sidebar from "./components/Sidebar.vue";
import Content from "./components/Content.vue";

export default {
  name: 'App',
  components: {
    Nav,
    Sidebar,
    Content
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.grid-custom-cols{
  display: grid;
  grid-template-columns: auto 1fr;
}
</style>
