<template>
    <div>
      <h2>Products</h2>
      <ul>
        <li v-for="(product, index) in products" :key="index">
          <nuxt-link :to="'/products/' + product.id">
            {{ product.name }} - {{ product.price }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'products',
    data() {
      return {
        products: [
          { id: 1, name: 'Product A', price: '$10', image:"../images/product/"},
          { id: 2, name: 'Product B', price: '$15', image:"../images/product/"},
          { id: 3, name: 'Product C', price: '$20', image:"../images/product/"},
          { id: 4, name: 'Product A', price: '$10', image:"../images/product/"},
          { id: 5, name: 'Product B', price: '$15', image:"../images/product/"},
          { id: 6, name: 'Product C', price: '$20', image:"../images/product/"},
        ]
      };
    },
    methods: {
    }
  };
  </script>
  