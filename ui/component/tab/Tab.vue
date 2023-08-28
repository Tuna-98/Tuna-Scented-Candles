<template>
  <div class="tabs w-full">
    <div class="flex items-center justify-center wrap space-x-4">
      <button 
        v-for="(tab, index) in tabs" 
        :key="index" 
        @click="activeTab = tab.id"
        :class="{ 
          'tabActive': activeTab === tab.id, 
          'bg-gray-100': activeTab !== tab.id 
        }"
      >
        {{ tab.label }}
      </button>
    </div>
    <div class="mt-10">
      <div v-if="currentTab">,
        <el-row>
          <el-col 
            :xs="12"
            :sm="8"
            :lg="6"
            class="grid-content mb-6 px-4" 
            v-for="product in currentTab.products"
            :key="product.id">
            <!-- {{ product.name }} -->
            <!-- <ProductCard :cardList="listCard"></ProductCard> -->
            <div class="card w-100 relative">
              <div class="card__top w-full relative over">
                <img :src="product.image" alt="" class="w-full object-cover ">
                <div class="card__top__action w-full h-full">
                  <div class="w-full h-full flex flex-column items-end justify-center">
                    <div class="title">{{ product.title }}</div>
                    <ul class="flex items-center justify-center mt-3">
                      <li class="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                          viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                          <path
                            d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                        </svg>
                      </li>
                      <li class="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                          viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                          <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                        </svg>
                      </li>
                      <li class="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                          viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                          <path d="M320 488c0 9.5-5.6 18.1-14.2 21.9s-18.8 2.3-25.8-4.1l-80-72c-5.1-4.6-7.9-11-7.9-17.8s2.9-13.3 7.9-17.8l80-72c7-6.3 17.2-7.9 25.8-4.1s14.2 12.4 14.2 21.9v40h16c35.3 0 64-28.7 64-64V153.3C371.7 141 352 112.8 352 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V320c0 70.7-57.3 128-128 128H320v40zM456 80a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM192 24c0-9.5 5.6-18.1 14.2-21.9s18.8-2.3 25.8 4.1l80 72c5.1 4.6 7.9 11 7.9 17.8s-2.9 13.3-7.9 17.8l-80 72c-7 6.3-17.2 7.9-25.8 4.1s-14.2-12.4-14.2-21.9V128H176c-35.3 0-64 28.7-64 64V358.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V192c0-70.7 57.3-128 128-128h16V24zM56 432a24 24 0 1 0 48 0 24 24 0 1 0 -48 0z" />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="notice absolute top-0 left-0 px-2 py-1" v-if="product.sale === 1">SALE!</div>
              <div class="mt-4">
                <h1 class="title">{{ product.name }}</h1>
                <div class="flex mt-3">
                  <span class="cost" v-if="product.cost > 0">${{ product.cost }}</span>
                  <span class="current">${{ product.current }}</span>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
import ProductCard from '../card/ProductCard.vue';
export default {
  name: 'Tabs',
  components: {
    ProductCard
  },
  props: {
    products: {
      type: Array,
      default: () => []
    },
    initialTab: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      activeTab: this.initialTab,
    };
  },
  computed: {
    tabs() {
      return this.products.map(product => ({
        id: product.type,
        label: product.type
      }));
    },
    currentTab() {
      return this.products.find(
        product => product.type === this.activeTab
      );
    }
  },
};
</script>
<style scoped>
button {
  border: 1px solid #D0D0D0;
  /* padding: 8px 16px; */
  margin: 0 15px;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  color: #D0D0D0;
  width: 154px;
  height: 49px;
}

button:hover {
  border: 1px solid #DB572E;
  color: #FFFFFF;
  background-color: #DB572E;
  transition: .4s;
}

.tabActive {
  border: 1px solid #DB572E;
  color: #FFFFFF;
  background-color: #DB572E;
}

.el-col {
  padding: 0 15px;
}

.el-col .card {
  width: 100%;
  position: relative
}

.el-col .card h1 {
  font-size: 20xp;
  line-height: 1em;
  font-weight: 500;
  margin-top: 15px;
}

.notice {
  position: absolute;
  top: 25px;
  left: 0;
  padding: 15px 0;
  font-size: 16px;
  line-height: 21px;
  padding: 2px 15px;
  color: #FFFFFF;
  background-color: #24acde;
}

.cost {
  font-size: 16px;
  font-weight: 400;
  text-decoration: line-through;
  color: #858585;
}

.current {
  margin-left: 10px;
  color: #222222;
  font-size: 18px;
  font-weight: 400;
}

.card__top {
  position: relative;
  overflow: hidden;
}

.card__top__action {
  position: absolute;
  bottom: -100%;
  left: 0;
  transition: .4s;
}

.card:hover .card__top .card__top__action {
  bottom: 30px;
  transition: .4s;
}

ul li {
  width: 36px;
  height: 36px;
  background-color: #FFFFFF;
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, .05);
  margin: 0 4px;
  transition: .3s;
  cursor: pointer;
}

ul li:hover {
  background-color: #DB572E;
  transition: .3s;
}

ul li svg {
  transition: .3s;
}

ul li:hover svg {
  fill: #FFFFFF;
  transition: .3s;
}
</style>
  