<template>
  <div class="room-view">
    <el-row>
      <RoomCard :roomList="roomList"></RoomCard>
    </el-row>
  </div>
</template>

<script>
import RoomCard from "../ui/component/card/RoomCard.vue";
export default {
  components: {
    RoomCard,
  },
  data() {
    return {
      roomList: [
        {
          id: 1,
          image: "",
          title: "Bathroom",
          subtitle: "Amet nisl purus in mollis nunc sed viverra",
        },
        {
          id: 2,
          image: "",
          title: "Living Room",
          subtitle: "Amet nisl purus in mollis nunc sed viverra",
        },
      ],
    };
  },
};
</script>

<style>
</style>