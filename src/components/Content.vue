<template>
  <div class="p-10">
    <div>
      {{categoryName}}
    </div>
    <div class="mb-10">
      <span class="cursor-pointer" @click="home()">Home></span>
      <span class="cursor-pointer" @click="home()"> Products</span>
      {{categoryName ? '>' + categoryName : ""}}
    </div>
    <div class="flex flex-wrap justify-center gap-10">
      <div v-for="product,key in productsToShow" :key="key">
        <Card :element="product"/>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue"

export default {
  data() {
    return{
      products: [],
      productsToShow: [],
    }
  },
  props:["changeCategory", "categoryName", "categoryId"],
  watch: {
    categoryId() {
      if(this.categoryId === 0){
        this.productsToShow = this.products;
      }else{
        this.filterProducts(this.products);
      }
    }
  },
  components:{
    Card
  },
  mounted(){
    this.getProducts()
  },
  methods:{
    getProducts(){
      this.axios
        .get("http://sva.talana.com:8000/api/product/")
        .then((response)=>{
          this.products = response.data;
          this.productsToShow = response.data;
        })
    },
    filterProducts(products) {
      this.productsToShow = products.filter(product => {
        return product.category.id === this.categoryId
      });
    },
    home(){
      this.changeCategory(0, "");
    }
  }
}
</script>
