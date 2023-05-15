<template>
    <div>
      <card
        topic="Vue.js Workshop"
        price="$99"
        description="Learn Vue.js fundamentals and build interactive web applications."
        :points="[
          'Introduction to Vue.js',
          'Vue Components',
          'Vue Router',
          'Vuex State Management',
          'API Integration'
        ]"
        schedule="June 1-3, 2023"
      />
    </div>
  </template>
  
  <script>
  import Card from '@/components/Card2.vue';
  
  export default {
    components: {
      Card
    }
  };
  </script>