<template>
  <div class="container pt-3">
    <div class="row">
      <AppCard v-for="course in courses" :key="course.id" v-bind:course="course" />
    </div>
  </div>
</template>

<script>
import AppCard from '@/components/ui/AppCard.vue';

export default {
  name: 'AppContent',
  components: {
    AppCard
  },
  data() {
    return {
      courses: [
        {
          id: 1,
          name: 'Navigate Protocol Essentials',
          duration: 25,
          dueDate: '26 Sep 2019',
          progress: 16,
          isMandatory: true
        },
        {
          id: 2,
          name: 'Dazoxumab Disease & Drug Overview',
          duration: 5,
          dueDate: '26 Sep 2019',
          progress: 100,
          isMandatory: true
        },
        {
          id: 3,
          name: 'ICH GCP Essentials',
          duration: 30,
          dueDate: '23 Oct 2019',
          progress: 100,
          isMandatory: true
        },
        {
          id: 4,
          name: 'RECIST 1.1',
          duration: 12,
          dueDate: '23 Oct 2019',
          progress: 100,
          isMandatory: true
        },
      ]
    }
  }
}
</script>
