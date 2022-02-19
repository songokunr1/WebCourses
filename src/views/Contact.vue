<template>

  
  <el-row :gutter="20">
    <el-col :span="24" :offset="0"
      ><div class="">
    <Details />
 </div></el-col>
  </el-row>
</template>

<script>
import Details from "@/components/Details.vue"
export default {
  components: {Details}
}
</script>

<style>
/* .center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
} */

</style>