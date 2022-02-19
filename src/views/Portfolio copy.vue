<template>


  <el-row :gutter="20">
    <el-col :span="6"><div class="grid-content "><div class="skillCard"> 
  <Skill :data=data />
  </div>
</div>
</el-col>
    <el-col :span="6"><div class="grid-content "><div class="skillCard"> 
  <Skill :data=data />
</div></div></el-col>
    <el-col :span="6"><div class="grid-content "><div class="skillCard"> 
  <Skill :data=data /></div>
  </div></el-col>
    <el-col :span="6"><div class="grid-content "><div class="skillCard"> 
  <Skill :data=data />
</div></div>
</el-col>
    <el-col :span="6"><div class="grid-content "><div class="skillCard"> 
  <Skill :data=data />
</div></div></el-col>


  </el-row>




<!-- <div style="left: 40%">
<div class="center" >  
  <Skill  :data=data />
</div>

</div>
<div style="left: 60%">
<div class="center" >  
  <Skill  :data=data />
</div>
</div> -->
</template>

<script>
import Skill from "@/components/Skill.vue"

export default {
    
    components: {Skill},

    data(){
        return {
            data: {a: '40%',
            b: '60%'}
        }
    }
}
</script>



<style scoped>
.el-alert {
  margin: 20px 0 0;
}
.el-alert:first-child {
  margin: 0;
}

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
  background: #c26fe2;
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




.skillCard{
    /* position: relative;
    top: 200px;
    width: 90%;
    height: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 60px;
    background: #333;
    box-sizing: border-box;
    box-shadow: 0 20px 50px rgba(0,0,0,.5); 
    border-radius: 2.5em; */


    position: relative;
    width: 90%;
    /* transform: translate(-50%,-50%); */
    padding: 7%;
    background: rgb(97, 52, 122);
    box-sizing: border-box;
    box-shadow: 0 20px 50px rgba(0,0,0,.5); 
    border-radius: 2.5em;
}
</style>