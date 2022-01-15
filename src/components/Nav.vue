<template>
  <div class="flex gap-5 justify-end items-center h-full relative p-2">
    <div>buscador</div>
    <div class="w-10" @click="isOpen = !isOpen">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-full" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <polyline points="7 10 12 4 17 10"></polyline>
        <path d="M21 10l-2 8a2 2.5 0 0 1 -2 2h-10a2 2.5 0 0 1 -2 -2l-2 -8z"></path>
        <circle cx="12" cy="15" r="2"></circle>
      </svg>
    </div>
    <div
      :class="isOpen ? 'pointer-event-auto opacity-100' : 'pointer-events-none opacity-0'"
      class="border bg-white absolute top-full p-4"
    >
      <div>Resumen de compra</div>
      <ul>
        <li v-for="product, key in this.productsToBuy" :key="key">
          <div>{{product.name}}</div>
          <div>
            {{product.price}}
            <div class="flex items-center border border-r-0">
              <span class="flex items-center justify-center w-4 h-full" @click="less">-</span>
              <span class="inline-block w-6 text-center">{{ counter }}</span>
              <span class="flex items-center justify-center w-4 h-full" @click="more">+</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return{
      isOpen: false,
    }
  },
  props:["productsToBuy"]
}
</script>
