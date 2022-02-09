<template>
   <div class="main">
      <router-view/>
   </div>
</template>

<script>
export default {
   name: "Content",
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
      box-sizing: border-box;
      flex: 1 1 auto;
      margin: 0 auto;
   }
</style>