<template>
  <div id="app">
    <div class="grid-custom-cols bg-[#fff000]">
      <div @click="changeCategory(0, '')" class="h-full text-3xl flex justify-center items-center border-b border-r cursor-pointer">
        Logo
      </div>
      <div class="border-b h-full">
        <Nav />
      </div>
      <div class="border-r">
        <Sidebar :changeCategory="changeCategory" />
      </div>
      <div>
        <Content :changeCategory="changeCategory" :categoryName="categoryName" :categoryId="categoryId" />
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Sidebar from "./components/Sidebar.vue";
import Content from "./components/Content.vue";

export default {
  name: 'App',
  data(){
    return{
      categoryName: "",
      categoryId: null,
      productsToBuy: [],
    }
  },
  components: {
    Nav,
    Sidebar,
    Content
  },
  methods:{
    changeCategory(id, name) {
      this.categoryId = id;
      this.categoryName = name;
    }
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
