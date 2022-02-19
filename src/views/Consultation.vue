<template>
  <div class="home">
    <Carousel
      :navigation="true"
      :pagination="true"
      :startAutoPlay="false"
      :timeout="5000"
      class="carousel"
      v-slot="{ currentSlide }"
    >  <el-row :gutter="20">

      <Slide v-for="(slide, index) in carouselSlides" :key="index">

      <el-col :span="6"><div class="grid-content ">
          <div class="skillCard"> 
      <Skill :data=data />
  </div>
</div>
</el-col>
        <!-- <div v-show="currentSlide === index + 1" class="slide-info">
          <img :src="require(`../assets/${slide}.jpg`)" alt="" />
        </div> -->
      </Slide>
      </el-row>

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
    const carouselSlides = ["bg-1", "bg-2", "bg-3"];
    const carouselSlides2 = [{"name": "Python - General", "skills": [{'name': "OOP", "skill": "60"}]}];

    return { carouselSlides };
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
  height: 100vh;
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