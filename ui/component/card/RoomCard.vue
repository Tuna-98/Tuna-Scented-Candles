<template>
  <div class="room-card w-full">
    <img :src="roomList.image" alt="" class="room-card__image" />
    <div class="room-card__content w-full h-full flex items-start justify-end">
      <h1>{{ roomList.title }}</h1>
      <p class="mt-4">{{ roomList.subtitle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    roomList: {
      type: Array,
      defaul: [],
    },
  },
  data() {
    return {
      roomList: [
        {
          image: "",
          title: "",
          subtitle: "",
        },
      ],
    };
  },
};
</script>

<style scoped>
.card {
  overflow: hidden;
}
.card .card__image {
  transition: 0.3s;
}
.card:hover .card__image {
  transform: scale(1.3);
  transition: 0.3s;
}
</style>