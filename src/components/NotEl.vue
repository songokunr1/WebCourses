<template>

</template>

<script>
import { h, onMounted } from 'vue'
import { ElNotification } from 'element-plus'
export default {
    props: ['tytul', 'Notyfication'],
  data() {
    return {
      open: false
    }
  },
  methods: {
      open1() {
        ElNotification.success({
    title: 'Dane w schowku',
    message: h('i', { style: 'color: teal' }, this.tytul, ''),
  })
},
open2() {
  ElNotification({
    title: 'Prompt',
    message: 'This is a message that does not automatically close',
    duration: 1400,
  })
},},


updated() {
    console.log("Value of val is: " + this.open);
    this.open1()
  },
  }


</script>