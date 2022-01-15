<template>
  <div>
    <div class=" text-2xl">Categorías</div>
    <ul>
      <li @click="handleClick(category.id, category.name)" v-for="category,key in categories" :key="key">
        {{category.name}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      categories: [],
    }
  },
  props:["changeCategory"],
  mounted() {
    this.getCategories()
  },
  methods:{
    getCategories() {
      this.axios
        .get("http://sva.talana.com:8000/api/product-category/")
        .then(response =>{
          this.categories = response.data
        })
    },
    handleClick(id, name) {
      this.changeCategory(id, name)
    }
  }
}
</script>
