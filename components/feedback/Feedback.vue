<template>
  <div class="feedback feedback__bg py-20">
    <div class="container mx-auto py-10">
      <FeedbackCard :feedbacks="feedbacks"></FeedbackCard>
    </div>
  </div>
</template>
<script>
import FeedbackCard from '../../ui/component/card/FeedbackCard.vue';

export default {
  components: {
    FeedbackCard
  },
  data() {
    return {
      feedbacks: [
        {
          title: "Feugiat vivamus",
          subtitle: "Feugiat vivamus at augue eget arcu dictum varius. At in tellus integer",
          avatar: "/assets/images/feedback/avatar1.jpg",
          name: "Eleanor Pena"
        },
        {
          title: "Urna cursus",
          subtitle: "Urna cursus eget nunc scelerisque viverra mauris in aliquam. Suspendisse",
          avatar: "/assets/images/feedback/avatar2.jpg",
          name: "Annette Black"
        },
        {
          title: "Pulvinar etiam",
          subtitle: "Pulvinar etiam non quam lacus. Pellentesque digniss enim sit amet.",
          avatar: "/assets/images/feedback/avatar3.jpg",
          name: "Esther Howard"
        }
      ]
    }
  }
}
</script>

<style>
  .feedback__bg{
    background-image: url(/assets/images/feedback/m4-slide-1.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>