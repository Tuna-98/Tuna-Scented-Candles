<template>
    <h1 :class="textClasses">
      <slot></slot>
    </h1>
  </template>
  
  <script>
  export default {
    props: {
      size: {
        type: String,
        default: 'xl'
      },
      color: {
        type: String,
        default: 'text-black'
      },
      weight: {
        type: String,
        default: 'font-normal'
      },
      leading:{
        type: String,
        default: 'leading-normal'
      },
      style: {
        type: String,
        default: 'not-italic'
      }
    },
    computed: {
      textClasses() {
        return [
          this.sizeClasses,
          this.color,
          this.weight,
          this.leading,
          this.style
        ];
      },
      sizeClasses() {
        return {
          'text-xs': this.size === 'xs',
          'text-sm': this.size === 'sm',
          'text-lg': this.size === 'lg',
          'text-xl': this.size === 'xl',
          'text-2xl': this.size === '2xl'
        };
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any additional styling specific to the title component */
  </style>
  