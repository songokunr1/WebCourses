<template>
  <br>

  <div>
    <card
      topic="Python Podstawy"
      price="700zł"
      hours="12h"
      description="Pozwól wprowadzić się w świat Python!"
      :points="[
        'Podstawy składni Pythona',
        'typy danych',
        'warunki',
        'funkcje',
        'twój pierwszy projekt'
      ]"
      schedule="Sobota i Niedziela 6-06-2023, 7-06-2023 "
      groupSize="2-4"
      redirect="/PythonPodstawy"
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
      redirect="/PythonObjectOrientedProgramming"
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
      redirect="/PythonObjectOrientedProgramming"
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
  },
  methods: {
    redirectToPythonPodstawy() {
      this.$router.push('/PythonPodstawy'); // Replace '/form' with the actual route path
    }
  }
};
</script>