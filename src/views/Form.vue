<template>
              <br>

      <!-- <div class="toMid"> -->
        <div class="card">
    <el-card class="rounded-card" :body-style="{ padding: '20px'}">
      <div class="card-body">
      <h3 class="contact-text text-h6 mb-0 font-italic">Chcesz dołączyć</h3>
    <h3 class="contact-text text-h6 mb-0 font-italic">na listę oczekującą</h3>
    <h3 class="contact-text text-h6 mb-0 font-italic">na kurs w małej grupie </h3>
    <h3 class="contact-text text-h6 mb-0 font-italic">lub umówić się </h3>
    <h3 class="contact-text text-h6 mb-0 font-italic">na korepetycje? </h3>
    <h3 class="contact-text text-h4 mb-0">Napisz do mnie! </h3>
  </div>

  </el-card>
</div>
<br>

      <Form/>
      <!-- </div> -->
  </template>
  
  <script>
  import Form from "@/components/Form.vue"
  export default {
    components: {Form}
  }
  </script>
  
  <style>
  .card {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }
.rounded-card {
border-radius: 180px;
background: rgb(255,255,255);
background: linear-gradient(125deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 65%, rgba(194,102,255,1) 87%, rgba(140,0,255,1) 100%);
}
  </style>