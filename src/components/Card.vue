<template>
<el-row :gutter="10">
    <el-col :xs="16" :sm="16" :md="16" :lg="16" :xl="20" :offset="2" background="red">
    <div> 
    
<div>
<section class="page-contain" @click.self="showDetails=false">
   <button @mouseover="showContent = true" @mouseleave="showContent = false" @click="SetShowDetails" >

   <a href="#"  class="data-card" id=1>

    <h3>Python</h3>
    <h4>Podstawy</h4>
    <h5>Zobacz czego możesz się nauczyć</h5>
    <div v-show="!showContent"> 
        <br>

        <h4 class="alignleft">dzień tygodnia:</h4>
        <h4 class="alignright">Sobota</h4>
        
        <br style="clear:both" />
        <h4 class="alignleft">Planowy start:</h4>
        <h4 class="alignright">23.04</h4>
       
        <br style="clear:both" />
        <h4 class="alignleft">Wielkość grupy:</h4>
        <h4 class="alignright">3-6</h4>
        
        <br style="clear:both" />
        <h4 class="center"> Masz pytanie?</h4>

        <h4 class="center"> Jesteś zainteresowany?</h4>
        

        <h4 > Zapisz się już teraz </h4>
        
    </div>

    <div class="alignleft" v-show="showContent">
    <p> &rsaquo; Podstawowe operacje w Pythonie </p>
    <p> &rsaquo; Typy danych </p>
    <p> &rsaquo; Tworzenie warunków </p>
    <p> &rsaquo; pętle </p>
    <p> &rsaquo; operacje na słowniku </p>
    <p> &rsaquo; funkcje </p>
    <p> &rsaquo; mini projekt - czyli zastosowanie nabytej wiedzy </p>
    <br>
    </div>
    <div class="sketchy napisz">Napisz/Kliknij</div>
    <span class="link-text" v-show="!showContent">
      Najedź aby dowiedzieć się wiecej
      <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z" fill="#753BBD"/>
    
</svg>

    </span>
    <div v-show="showContent"> <br> <br> </div>
    <div>
        <span class="alignleft sketchy">10h</span>
        <span class="alignright sketchy">500zł</span>
    </div>
    <div></div>
  </a>
  </button>
  <div class="center" style="relative">
  <Details v-show="showDetails" showDetails=showDetails />
  </div>
    
    

     <!-- @click="SetShowDetails"  -->
  <!-- <div class="details" v-show="showDetails" @click="SetShowDetails">  </div> -->

     
</section>

</div>
</div> 
    </el-col>
    </el-row>
</template>

<script>
import Details from '@/components/Details.vue'
export default {
    components: {Details},
    data() {
    return {
      showBlock: false,
      showContent: false,
      showDetails: false,
      CourseContent: []
           }
    },
    methods: {
        SetShowDetails() {
            this.showDetails = !this.showDetails
        }
    }
    }


</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@600;700&display=swap");

* {
  box-sizing: border-box;
}

.page-contain {
  display: flex;
  min-height: 9vh;
  align-items: center;
  justify-content: center;
  background: #e7f3f1;
  border: 0.75em solid white;
  padding: 2em;
  font-family: "Open Sans", sans-serif;
}

.data-card {
  display: flex;
  flex-direction: column;
//   max-width: 40.75em;
//   min-height: 40.75em;
  // max-width: 1140px;
  // min-width: 470px;
  // min-height: 740px;
  // max-height: 740px;
  overflow: hidden;
  border-radius: 2.5em;
  text-decoration: none;
  background: white;
  margin: 0 0 0 0;
  padding: 0.75em 1.5em;
  box-shadow: 0 1.5em 2.5em -0.5em rgba(#000000, 0.1);
  transition: transform 0.45s ease, background 0.45s ease;

  h3 {
    color: #2e3c40;
    font-size: 1.5em;
    font-weight: 600;
    line-height: 1;
    padding-bottom: 0.5em;
    margin: 0 0 0.142857143em;
    border-bottom: 2px solid #753bbd;
    transition: color 0.45s ease, border 0.45s ease;
  }
    h5 {
    color: #2e3c40;
    font-size: 1.2em;
    font-weight: 600;
    transition: color 0.45s ease, border 0.45s ease;

  }

  h4 {
    color: #963b96;
    text-transform: uppercase;
    font-size: 1.325em;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 0.1em;
    margin: 0 0 1.777777778em;
    transition: color 0.45s ease;
  }

p {
    // opacity: 0;
    color: #ffffff;
    font-weight: 600;
    line-height: 1.8;
    margin: 0 0 1.25em;
    transform: translateY(-1em);
    // transition: opacity 0.45s ease, transform 0.5s ease;
    align-items: left;
    // opacity: 1;
    text-align: left;

  }

  .link-text {
    display: block;
    color: #753bbd;
    font-size: 1.425em;
    font-weight: 600;
    line-height: 1.2;
    margin: auto 0 20px;
    transition: color 0.45s ease;

    svg {
      margin-left: 0.5em;
      transition: transform 0.6s ease;

      path {
        transition: fill 0.45s ease;
      }
    }
  }

  &:hover {
    background: #753bbd;
    transform: scale(1.02);

    h3 {
      color: #ffffff;
      border-bottom-color: #a754c4;
    }

    h4 {
      color: #ffffff;
    }

    h5 {
      opacity: 0;
    }
    // p {
    //   opacity: 0;
    //   transform: none;
      
    // }

    .link-text {
      color: darken($color: #000000, $amount: 0);

      svg {
        animation: point 1.25s infinite alternate;

        path {
          fill: #ffffff;
        }
      }
    }
  }
}

@keyframes point {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(0.125em);
  }
  }
  .alignleft {
    float: left;
  }
  .alignright {
    float: right;
  }

.gold {
    color: blue;
    font-size: 2.125em;
    font-weight: 600;
    line-height: 1.2;
}

body {
    padding: 2rem;
    font-family: 'Just Another Hand', cursive;
    background: #f3f3f3;
}

.sketchy {
    padding: 0.5rem 0.5rem;
    display: inline-block;
    border: 3px solid #333333;
    font-size: 2rem;
    border-radius: 2% 8% % 4% / 1% 1% 2% 4%;
    text-transform: uppercase;
    letter-spacing: 0.3ch;
    background: #ffffff;
    position: relative;
    
    &::before {
        content: '';
        border: 2px solid #353535;
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0) scale(1.015) rotate(1.5deg);
        border-radius: 1% 1% 2% 4% / 2% 8% 7% 4%;
    }
}
napisz {
    color: red;
}


</style>