<template>
  <div class="py-10">
    <div class="container mx-auto">
      <el-main>
        <el-row>
          <el-col :sm="24" :lg="8" class="pr-4">
            <div class="w-full h-full flex flex-col items-start justify-center">
              <h1>We try to make the best candles</h1>
              <ul class="text-start mt-8 p-0 m-0">
                <li
                  class="flex items-center mb-4"
                  v-for="(note, index) in notes"
                  :key="index"
                >
                  <div class="mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>
                  </div>
                  <span>{{ note }}</span>
                </li>
              </ul>
            </div>
          </el-col>
          <el-col :sm="24" :lg="16">
            <div class="w-full">
              <el-row>
                <el-col :sm="24" :lg="16" class="p-1">
                  <div class="image w-full h-full">
                    <img
                      src="../../public/assets/images/notes/img1.jpg"
                      alt=""
                      class="w-full h-full"
                    />
                  </div>
                </el-col>
                <el-col :sm="24" :lg="8">
                  <div class="w-full h-full">
                    <el-row>
                      <el-col :sm="12" :lg="24" class="p-1">
                        <div class="image w-full h-full">
                          <img
                            src="../../public/assets/images/notes/img2.jpg"
                            alt=""
                            class="w-full h-full"
                          />
                        </div>
                      </el-col>
                      <el-col :sm="12" :lg="24" class="p-1">
                        <div class="image w-full h-full">
                          <img
                            src="../../public/assets/images/notes/img3.jpg"
                            alt=""
                            class="w-full h-full"
                          />
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
    </el-main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notes: [
        "Amet nisl purus in mollis nunc sed viverra",
        "Amet nisl purus in mollis nunc",
        "Amet nisl purus in mollis nunc sed",
      ],
    };
  },
};
</script>

<style scoped>
  .image{
       overflow: hidden;
  }
  .image img{
    transition: .4s;
  }
  .image:hover img{
    transform: scale(1.3);
    transition: .4s;
  }
  h1{
    font-size: 32px;
    line-height: 1.1em;
    font-weight: 600;
  }
  svg{
    fill: #db572e;
  }
  ul li {
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    color: #858585;
  }
</style>