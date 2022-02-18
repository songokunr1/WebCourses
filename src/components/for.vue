<template>
    <ul>
    <li v-for="(item, key, index) in data" :key="key">
      {{ item }} - {{ key }} - {{ index }}
    </li>
  </ul>
</template>

<script>
export default {
       data() {
       return {
        data: {a: '40%',
            b: '60%'}
       }
   }
}
</script>

<style>

</style>