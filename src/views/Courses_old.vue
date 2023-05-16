<template>
  <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">
  
    <el-row :gutter="20">
      <el-col :span="24" :offset="0"
        ><div class="grid-content bg-purple">
    <transition
      name="custom-classes-transition"
      enter-active-class="animated bounceOutLeft"
      leave-active-class="animated bounceOutLeft">
  
  
      <p v-if="show"><Card /></p>
    </transition>
  
          </div></el-col>
    </el-row>
        
       
  
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
  .el-row {
    margin-bottom: 20px;
  }
  .el-row:last-child {
    margin-bottom: 0;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  </style>