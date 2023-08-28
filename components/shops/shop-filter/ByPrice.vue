<template>
  <div class="by-price">
    <h1>By Price</h1>
    <div class="flex flex-col m-auto h-32 justify-center">
      <div class="py-1 relative min-w-full">
        <div class="h-2 bg-gray-200 rounded-full">
          <div class="absolute h-2 rounded-full bg-black w-0" style="width: 24.1935%; left: 11.2903%;"></div>
          <div
            class="absolute h-4 flex items-center justify-center w-4 rounded-full bg-white shadow border border-gray-300ml-2 top-0 cursor-pointer"
            unselectable="on" 
            onselectstart="return false;" 
            style="left: 11.2903%;"
          >
            <div class="relativemt-2 w-1">
            </div>
          </div>
          <div 
            class="absolute h-4 flex items-center justify-center w-4 rounded-full bg-white shadow border border-gray-300ml-2 top-0 cursor-pointer"
            unselectable="on" 
            onselectstart="return false;" 
            style="left: 35.4839%;"
          >
            <div class="relativemt-2 w-1">
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-between mt-4">
        <button class="text-white px-4 py-2">FILTER</button>
        <div class="flex items-center">
          <span class="pr-2">Price:</span><span>$8</span> <span class="px-2">-</span> <span>$7</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'price',
  data() {
    return {
      
    }
  }
}
</script>
<style scoped>
  h1{
    font-size: 30px;
    font-weight: 500;
    color: #222222;
    line-height: 1.2em;
    font-style: normal;
  }
  button{
    background-color: #DB572E;
    font-weight: 600;
    font-size: 18px;
    transition: .3s;
  }
  button:hover{
    background-color: #222222;
    transition: .3s;
  }
  span{
    color: #858585;
  }
</style>