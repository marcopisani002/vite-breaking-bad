<template>
  <header class="container">
    <h1 class="text-center my-5 text-white">{{ message }}</h1>
  </header>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
     
    }
  }
};
</script>

<style scoped>

</style>
