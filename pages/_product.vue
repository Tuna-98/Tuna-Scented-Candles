<template>
    <div>
      <h2>{{ product.name }}</h2>
      <p>Price: {{ product.price }}</p>
      <p>Description: {{ product.description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    async asyncData({ params }) {
      // Simulate fetching product details from an API
      const product = await fetchProductDetails(params.id);
      return { product };
    }
  };
  
  async function fetchProductDetails(productId) {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    // Return product details based on productId
    return {
      id: productId,
      name: `Product ${productId}`,
      price: `$${productId * 5}`,
      description: `This is the description for Product ${productId}`
    };
  }
  </script>
  