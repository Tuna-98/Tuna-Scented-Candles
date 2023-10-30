<template>
  <div class="about">
    <div class="w-full">
      <IntroVue></IntroVue>
    </div>
    <div class="w-full">
      <WhoWeArreVue></WhoWeArreVue>
    </div>
    <div class="w-full">
      <ProductsType :products="products.slice(0, 9)" :initialTab="products[0]?.type"></ProductsType>
    </div>
    <div class="w-full">
      <Feedback></Feedback>
    </div>

    <div class="w-full py-20">
      <div class="container mx-auto">
        <PartnerCard :partners="partners"></PartnerCard>
      </div>
    </div>
  </div>
</template>

<script>
import WhoWeArreVue from '../../components/about/WhoWeArre.vue';
import IntroVue from '../../components/about/Intro.vue';
import Feedback from '../../components/feedback/Feedback.vue';
import ProductsType from '../../components/about/ProductsType.vue';
import PartnerCard from '../../ui/component/card/PartnerCard.vue';
export default {
  name: 'about',
  components: {
    IntroVue,
    WhoWeArreVue,
    Feedback,
    PartnerCard,
    ProductsType
  },
  data() {
    return {
      partners: [
        "/assets/images/partner/partner-1.svg",
        "/assets/images/partner/partner-2.svg",
        "/assets/images/partner/partner-3.svg",
        "/assets/images/partner/partner-4.svg",
        "/assets/images/partner/partner-5.svg",
      ],
      products: [
        {
          id: 1,
          type: 'Handmade Soap',
          products: [
            { 
              id: 1,
              image: '/assets/images/about-tab-1.jpg',
              type: 'Handmade Soap',
            },
          ]
        },
        {
          id: 2,
          type: 'Scented Candle',
          products: [
            { 
              id: 1, 
              image: '/assets/images/about-tab-2.jpg',
              type: 'Scented Candle',
            },
          ]
        },
        {
          id: 3,
          type: 'Perfume',
          products: [
            { 
              id: 1, 
              image: '/assets/images/about-tab-3.jpg',
              type: 'Cented',
            },
          ]
        },
      ],
    }
  }
}
</script>

<style></style>