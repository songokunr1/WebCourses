<template>
  <div>
    <el-row :gutter="40">
      <el-col :span="24" :offset="0">
        <div class="">
          <Details />
        </div>
      </el-col>
    </el-row>
  </div>

  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
</template>

<script>
import Details from "@/components/Details.vue";
import Form from "@/components/Form.vue";

export default {
  components: { Details, Form },
  methods: {
    openLink(url) {
      window.open(url, '_blank');
    }
  }

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