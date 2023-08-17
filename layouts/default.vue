<template>
  <div>
    <Header></Header>
    <main>
      <Homepage></Homepage>
      <nuxt />
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '../components/header/Header.vue';
  import Footer from '../components/footer/Footer.vue';
  import Homepage from '../pages/Homepage.vue';
  export default {
    components: {
      Header,
      Homepage,
      Footer
    }
  };
</script>
  
<style scoped>
/* Add your styling here */
</style>
