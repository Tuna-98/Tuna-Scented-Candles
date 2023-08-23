<template>
  <div>
    <Header></Header>
    <main>
      <NuxtPage />
      <nuxt />
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '../components/header/Header.vue';
  import Footer from '../components/footer/Footer.vue';
  import Homepage from '../pages/Homepage.vue';
  import About from '../pages/about.vue';
  export default {
    components: {
      Header,
      Homepage,
      About,
      Footer
    }
  };
</script>
  
<style scoped>
/* Add your styling here */
</style>
