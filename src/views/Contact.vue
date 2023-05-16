<template>
  <el-row :gutter="20">
    <el-col :span="24" :offset="0">
      <div class="">
        <Details />
      </div>
    </el-col>
  </el-row>
  <!-- <div class="toMid">
    <h3 class="contact-text text-h5 mb-0">Chcesz dołączyć</h3>
    <h3 class="contact-text text-h5 mb-0">na listę</h3>
    <h3 class="contact-text text-h5 mb-0">oczekującą na kursu </h3>
    <h3 class="contact-text text-h5 mb-0">lub na korepetycje? </h3>
    <h3 class="contact-text text-h4 text-decoration-underline">Napisz do mnie! </h3>
    <Form />
  </div> -->
</template>

<script>
import Details from "@/components/Details.vue";
import Form from "@/components/Form.vue";

export default {
  components: { Details, Form },
};
</script>

<style>
.toMid {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  margin-top: 60px;
}

.contact-text {
  text-align: center;
  margin-bottom: 20px;
}
</style>