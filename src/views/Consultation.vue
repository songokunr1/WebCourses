<template>
  <div class="home">
    <Carousel
      :navigation="true"
      :pagination="true"
      :startAutoPlay="false"
      :timeout="5000"
      class="carousel"
      v-slot="{ currentSlide }"
    >  

    

      <Slide v-for="(slide, index) in carouselSlides" :key="index">
        
        <div v-show="currentSlide === index + 1">
        <el-row :gutter="24">
          <el-col :span="8">
        <div class="grid-content">
          <div class="skillCard"> 
            <Skill :data=carouselSlides[giveMeCurrentSlide(currentSlide)-1].skills />
            </div> 
        </div>
</el-col>
          <el-col :span="8">
        <div class="grid-content">
          <div class="skillCard"> 
            <Skill :data=carouselSlides[currentSlide].skills />
            </div> 
        </div>
</el-col>
          <el-col :span="8">
        <div class="grid-content">
          <div class="skillCard"> 
            <Skill :data=carouselSlides[currentSlide+1].skills />
            </div> 
        </div>
</el-col>
      </el-row>
      </div>
      <!-- <div v-show="currentSlide === index + 1" class="slide-info">
          <img :src="require(`@/assets/${slide.name}.jpg`)" alt="" />
        </div> -->
</Slide>

<!-- {{currentSlide}} -->


          <!-- {{index}}
          asdfasd
      <el-col :span="6"><div class="grid-content">
          <div class="skillCard"> 
      <Skill :data=data />
    
      carouselSlides2[index]
  </div> -->
<!-- </div> -->
<!-- </el-col> -->
        
      <!-- </Slide> -->
    </Carousel>

  </div>
</template>


<script>
import Carousel from "../components/Carousel.vue";
import Slide from "../components/Slide.vue";
import Skill from "@/components/Skill.vue"


export default {
  name: "Home",
  components: { Carousel, Slide, Skill },
  setup() {
    const carouselSlides2 = ["bg-1", "bg-2", "bg-3"];
    const carouselSlides = [{"name": "bg-1", "skills": [{'name': "OOP", "skill": "60"}, {'name': "aaa", "skill": "30"}]}, {"name": "bg-2", "skills": [{'name': "OOP", "skill": "70"}, ]}, {"name": "bg-3", "skills": [{'name': "OOP", "skill": "50"}, ]}, {"name": "bg-2", "skills": [{'name': "OOP", "skill": "40"}, ]}];

    return { carouselSlides};
  },
      data(){
        return {
            data: {a: '40%',
            b: '60%'}
        }
    }
};
</script>

<style lang="scss" scoped>
.carousel {
  position: relative;
  max-height: 50vh;
  height: 50vh;
  .navigate {
  height: 100vh;
  }
  .slide-info {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 100%;
    height: 100%;
    img {
      min-width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
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