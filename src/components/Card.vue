<template>
  <div>
    <div class="flex flex-col w-60">
      <div class="w-full h-80 flex justify-center items-center bg-gray-100 bg-opacity-75 border">
        <img class="max-w-full max-h-full" :src="element.photo" alt="">
      </div>
      <div class="">
        <div>{{element.name}}</div>
        <div>Precio ${{ element.price }}</div>
        <div class="cursor-pointer select-none flex justify-between w-full">
          <div class="flex items-center border border-r-0">
            <span class="flex items-center justify-center w-4 h-full" @click="less">-</span>
            <span class="inline-block w-6 text-center">{{ counter }}</span>
            <span class="flex items-center justify-center w-4 h-full" @click="more">+</span>
          </div>
          <div class="self-center flex-grow bg-black text-white flex justify-center py-2 border border-black border-l-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="6" cy="19" r="2"></circle>
              <circle cx="17" cy="19" r="2"></circle>
              <path d="M17 17h-11v-14h-2"></path>
              <path d="M6 5l14 1l-1 7h-13"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    }
  },
  props:["element"],
  methods:{
    more() {
      this.counter += 1;
    },
    less() {
      this.counter > 0 && (this.counter -= 1);
    }
  }
}
</script>
