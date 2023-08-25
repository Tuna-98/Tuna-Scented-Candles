<template>
  <div>
    <el-row>
      <el-col
        :xs="24"
        :sm="12"
        class="grid-content p-4"
        v-for="(card, index) in roomList"
        :key="index"
      >
        <div class="card w-full">
          <img :src="card.image" alt="" class="card__image w-full" />
          <div class="card__content w-full h-full flex items-start justify-end p-4">
            <h1 class="mb-4">{{ card.title }}</h1>
            <p class>{{ card.subtitle }}</p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  props: {
    roomList: {
      type: Array,
      defaul: () => [],
    },
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.card {
  overflow: hidden;
  position: relative;
}
.card .card__image {
  transition: 0.4s;
}
.card:hover .card__image {
  transform: scale(1.2);
  transition: 0.4s;
}
.card__content{
  position: absolute;
  bottom: 0;
  flex-direction: column;
}
h1{
  font-size: 42px;
  line-height: 1em;
  font-weight: normal;
  color: #FFFFFF;
}
p {
  font-size: 16px;
  font-weight: 300;
  line-height: 18px;
  color: #FFFFFF;
}
/* el-col{
  padding: 0 15px !important;
} */
</style>