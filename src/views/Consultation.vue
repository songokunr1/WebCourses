

<template>
<div class="outer">
  <h3>Vue Teleport Example</h3>
  <div>
    <Notyfication />
  </div>
</div>
<div><NotEl :tytul='hejo' /></div>
</template>

<script>
import Notyfication from '@/components/Notyfication.vue'
import NotEl from '@/components/NotEl.vue'

export default {
  components: {Notyfication, NotEl},
  data() {
    return {
      open: false,
      hejo: 'siemka'
    }
  }
}

</script>
