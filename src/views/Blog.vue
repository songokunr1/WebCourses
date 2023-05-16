<template>
    <br>

    <div>
      <card
        topic="Vue.js Workshop"
        price="700zł"
        hours="12h"
        description="Learn Vue.js fundamentals and build interactive web applications."
        :points="[
          'Introduction to Vue.js',
          'Vue Components',
          'Vue Router',
          'Vuex State Management',
          'API Integration'
        ]"
        schedule="Sobota i Niedziela 6-06-2023, 7-06-2023 "
        groupSize="2-4"
      />
    </div>
<br>
    <div>
      <card
        topic="Vue.js Workshop"
        price="700zł"
        hours="12h"
        description="Learn Vue.js fundamentals and build interactive web applications."
        :points="[
          'Introduction to Vue.js',
          'Vue Components',
          'Vue Router',
          'Vuex State Management',
          'API Integration'
        ]"
        schedule="Sobota i Niedziela 6-06-2023, 7-06-2023 "
        groupSize="2-4"
      />
    </div>
  </template>

  <script>
  import Card from '@/components/Card2.vue';
  import Form from '@/components/Form.vue';

  export default {
    components: {
      Card,
      Form
    }
  };
  </script>