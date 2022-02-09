<template>
  <div id="wrapper">
    <Header />
    <Content />
    <Footer />
  </div>
</template>

<script>
  import Header from '@/components/Header.vue';
  import Content from '@/components/Content.vue';
  import Footer from '@/components/Footer.vue';
  
  export let isAuth = false;

  export default {
    name: "App",
    components: {
      Header,
      Content,
      Footer
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

body {
  background-color: #cdebff;
  height: 100%;
  margin: 0px;
}
#wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
button {
  cursor: pointer;
}
img {
  vertical-align: top;
}
</style>
