<template>
<!-- {{data}}
{{data.value}}
  <ul>
    <li v-for="(item, key, index) in data" :key="key">
      {{ item }} - {{ key }} - {{ index }}
    </li>
  </ul> -->
    <!-- <div class="center"> -->

       <h1>Programming Language Skill</h1>

       <div class="skillbox" v-for="(item, key) in data" :key="key">
           <p>{{key}}</p>
           <p></p>
           <div class="skill">
               <div class="skill_level" v-bind:style="{width: item}"></div>
           </div>
       </div>

       <div class="skillbox">
           <p>Python</p>
           <p></p>
           <div class="skill">
               <div class="skill_level" style="width: 20%"></div>
           </div>
       </div>

       <div class="skillbox">
           <p>PHP</p>
           <p></p>
           <div class="skill">
               <div class="skill_level"  v-bind:style="{width: test}"></div>
           </div>
       </div>

       <div class="skillbox">
           <p>Java</p>
           <p></p>
           <div class="skill">
               <div class="skill_level"  v-bind:style="{width: data.a}"></div>
           </div>
       </div>

       <div class="skillbox">
           <p>SQL</p>
           <p></p>
           <div class="skill">
               <div class="skill_level" style="width: 80%"></div>
           </div>
       </div>
       
    <!-- </div> -->
</template>

<script>




export default {
   props: ['data'],
   data() {
       return {
        test: '40%'
       }
   }

}
</script>

<style scoped>
body
{
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    background: #282828;
    
}

.center{
    position: relative;
    width: 20%;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 20px;
    background: #333;
    box-sizing: border-box;
    box-shadow: 0 20px 50px rgba(0,0,0,.5);
    border-radius: 2.5em;
}

h1{
    position: a;
    margin: 0;
    padding: 0;
    font-size: 22px;
    color: rgb(255, 255, 255);
    text-transform: uppercase;
    /* shape-outside:-moz-element(); */
    box-shadow: 0 10px 50px rgba(0,0,0,.3);
    letter-spacing: 2px;
}

.skillbox{
    box-sizing: border-box;
    width: 100%;
    margin: 10% 0;
}

.skillbox p{
    color: #fff;
    text-transform: uppercase;
    margin: 0 0 10px;
    padding: 0;
    font-weight: bold;
    letter-spacing: 1px;
}

.skillbox p:nth-child(2){
    float: right;
    position: relative;
    top: -25px;
}

.skill{
    background: #282828;
    padding: 4px;
    box-sizing: border-box;
    border: 1px solid #0fffb7;
    border-radius: 2px;
}

.skill_level{
    background: #0fffb7;
    width: 100%;
    height: 10px;
}
</style>