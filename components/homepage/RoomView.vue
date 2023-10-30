<template>
  <div class="room-view py-10">
    <div class="container mx-auto pt-10">
      <h1 class="text-center">Burn your candle of life</h1>
      <div class="room-view__content mt-8">
        <RoomCard :roomList="roomList"></RoomCard>
        <div class="room-view__content__decor">
          <img src="../public/assets/images/room/decor.png" alt="" class="w-full">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RoomCard from "../../ui/component/card/RoomCard.vue";
import Title from "../../ui/component/title/Title.vue"
export default {
  components: {
    RoomCard,
    Title
  },
  data() {
    return {
      roomList: [
        {
          id: 1,
          image: "/assets/images/room/room1.jpg",
          title: "Bathroom",
          subtitle: "Amet nisl purus in mollis nunc sed viverra",
        },
        {
          id: 2,
          image: "/assets/images/room/room2.jpg",
          title: "Living Room",
          subtitle: "Amet nisl purus in mollis nunc sed viverra",
        },
      ],
    };
  },
};
</script>

<style scoped>
  h1 {
    font-size: 32px;
    font-weight: 600;
    line-height: 38px;
    color: #222222;
  }
  .room-view__content {
    position: relative
  }
  .room-view__content__decor {
    width: 110px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>