<template>
  <div>
    <div class="w-60 h-80 flex justify-center items-center">
      <img class="max-w-full max-h-full" :src="element.photo" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props:["element"]
}
</script>
