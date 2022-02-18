<template>
<link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">


  <transition
    name="custom-classes-transition"
    enter-active-class="animated bounceOutLeft"
    leave-active-class="animated bounceOutLeft"
  >
    <p v-if="show"><Card /></p>
  </transition>

      
     

</template>

<script>

import Card from '@/components/Card.vue'

export default {
    name: 'Courses',
    components: {Card},
    data() {
        return {
            show: true,
        }
    }
}
</script>

<style>

</style>