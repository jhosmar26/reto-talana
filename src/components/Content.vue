<template>
  <div class="">
    <div>Categoría</div>
    <div>breadcrumb</div>
    <div class="flex flex-wrap">
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
      paginatorIndex: 0,
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
  }
}
</script>
