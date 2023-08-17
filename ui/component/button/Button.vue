<template>
    <nuxt-link :to="routerLink" :class="buttonClasses" target="__blank">
      <div>{{ title }}</div>
      <slot></slot>
    </nuxt-link>
  </template>
  
  <script>
  export default {
    props: {
      routerLink: {
        type: String,
        default: '/'
      },  
      title:{
        type: String,
        default: 'Button'
      },
      size: {
        type: String,
        default: 'medium'
      },
      color: {
        type: String,
        default: 'text-white'
      },
      bgColor: {
        type: String,
        default: 'bg-color-500'
      },
      borderColor: {
        type: String,
        default: 'border-transparent'
      },
      borderWidth: {
        type: String,
        default: 'border'
      },
      rounded: {
        type: String,
        default: '',
      }
    },
    computed: {
        buttonClasses() {
            return [
                this.sizeClasses(),
                this.color,
                this.bgColor,
                this.borderColor,
                this.borderWidth
            ];
        },
        sizeClasses() {
            return {
                'text-xs': this.size === 'small',
                'text-sm': this.size === 'medium',
                'text-lg': this.size === 'large',
                'bg-blue-500 text-white': true
            };
        }
    },
};
  </script>
  
  <style scoped>
  /* Add any additional styling specific to the button component */
  </style>
  