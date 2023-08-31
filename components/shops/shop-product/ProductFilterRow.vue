<template>
  <div class="filter px-4">
    <div class="flex items-center justify-between">
      <div class="showing-result">
        <p>Showing {{ minQuantity }}-{{ maxQuantity }} of {{ allQuantity }} results</p>
      </div>
      <div>
        <div>
          <div class="dropdown inline-block relative">
            <button class="py-2 px-4 rounded inline-flex items-center">
              <span class="mr-3">Sort by Default</span>
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>
            <ul class="dropdown-menu absolute hidden text-gray-700">
              <li class=""><a class="py-3 px-4 block whitespace-no-wrap" href="#">Sort by Default</a></li>
              <li class=""><a class="py-3 px-4 block whitespace-no-wrap" href="#">Sort by Popularity</a></li>
              <li class=""><a class="py-3 px-4 block whitespace-no-wrap" href="#">Sort by Rated</a></li>
              <li class=""><a class="py-3 px-4 block whitespace-no-wrap" href="#">Sort by Latest</a></li>
              <li class=""><a class="py-3 px-4 block whitespace-no-wrap" href="#">Sort by Price: </a></li>
              <li class=""><a class="py-3 px-4 block whitespace-no-wrap" href="#">Sort by Price: </a></li>
            </ul>
          </div>
          <div class="dropdown inline-block relative">
            <button class="py-2 px-4 rounded inline-flex items-center">
              <span class="mr-3">Show 12</span>
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>
            <ul class="dropdown-menu absolute hidden text-gray-700">
              <li class=""><a class="py-3 px-4 block whitespace-no-wrap" href="#">3</a></li>
              <li class=""><a class="py-3 px-4 block whitespace-no-wrap" href="#">6</a></li>
              <li class=""><a class="py-3 px-4 block whitespace-no-wrap" href="#">9</a></li>
            </ul>
          </div>
          <div class="dropdown inline-block relative">
            <button class="py-2 px-4 rounded inline-flex items-center">
              <span class="mr-3">Filters</span>
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Dropdown from '../../../ui/component/dropdown/Dropdown.vue';
  export default {
    name: 'filter',
    components: {
      Dropdown
    },
    props:{
      minQuantity: {
        type: Number,
        default: 0
      },
      maxQuantity: {
        type: Number,
        default: 0
      },
      allQuantity: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
      }
    },
    methods: {}
  }
</script>
<style scoped>
  .dropdown:hover .dropdown-menu {
    display: block;
    transition: .3s;
    z-index: 9;
    width: 100%;
  }
  ul{
    border: 1px solid #dedede;
    background-color: #FFFFFF;
  }
  ul li{
    border-bottom: 1px solid #dedede;
    font-size: 20px;
    font-weight: 400;
    color: #858585;
    transition: .3s;
  }
  ul li:hover{
    background-color: #f1f0f0;
    color: #DB572E;
    transition: .3s;
  }
  ul list-style{
    border-bottom: 0;
  }
  button svg{
    fill: #858585;
    height: 24px;
  }
  button span{
    font-size: 20px;
    font-weight: 400;
    color: #858585;
  }
  .showing-result p{
    font-size: 20px;
    font-weight: 400;
    color: #858585;
  }
</style>