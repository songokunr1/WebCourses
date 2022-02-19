<template>
  <transition name="bounce">
  <el-row :gutter="10">
    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="9" :offset="4">
    <div>
       <!-- class="grid-content bg-purple"> -->

<div class="details">
      <form>
                 <h4>Preferowane miejsce spotkania: </h4> 
<input type="checkbox" id="Online" value="Online" v-model="checkedNames">
<label style="font-size: 1em;" for="Online">Online</label>
<input style="margin: 0 10px 0 20px" type="checkbox" id="stacjonarnie" value="stacjonarnie" v-model="checkedNames">
<label style="font-size: 1em;" for="stacjonarnie">stacjonarnie za doplata</label>


<br>

      <label>Rodzaj Kursu:</label>
      <select v-model="selected">
          <option value="Python-Podstawy"> Python, Podstawy</option>
          <option value="Python-Analiza-Danych">Python, Wstęp do Analizy Danych </option>
      </select>
      <label>Napisz wiadomość</label>
       <textarea name="text"  placeholder="Wiadomość"></textarea>
      <label>Imię i nazwisko</label>
      <input type="" required v-model="email">

      <label>email</label>
      <input type="email" required v-model="password">
      <br>
      <button class="myButton" v-on:click="SendForm">
          Wyślij formularz
      </button>
      <!-- <div class="terms">
          <input type="checkbox" v-model="terms" required>
          <label>Accept terms</label>
      </div> -->



    
  </form>
  </div>
  </div> 
      </el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="9" :offset="0">

    <div> 
      <!-- class="grid-content bg-purple"> -->
       <BuisnessCard />
</div>
</el-col>
  </el-row>
    </transition>

</template>

<script>

import BuisnessCard from '@/components/BuisnessCard.vue'

export default {
    components: {BuisnessCard},
    props: ['showDetails'],
    data(){
      return {
        checkedNames: [],
      }
    },
    methods: {
      copy(text){
        navigator.clipboard.writeText(text).then(() => {
        alert("successfully copied");
      })
      .catch(() => {
        alert("something went wrong");
      });

      }
    }
}
</script>

<style scoped>
.alignleft {
	float: left;
}
.alignright {
	float: right;
}
.details {
    position: relative;
      margin: 0 auto;
      /* background: #753bbd; */
      background: #753bbd;

      border-radius: 15px;
      box-shadow: 0 15px 60px rgba(0, 0, 0, 0.5);
}
.form {
    background: white;
}

form {

    margin: 30px auto;
    background: rgb(255, 255, 255);
    text-align: left;
    padding: 7px;
    border-radius: 16px;
    align-items: left;
    position: relative;
    box-shadow: 0 15px 60px rgba(0, 0, 0, 2.5);
    

  }
  label {
    color: rgb(180, 29, 255);
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 1.5em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
    
  }
  input, select, textarea {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border-color: inherit;
    border-bottom: 3px solid rgb(155, 75, 75);
    color: #555;
    border: 2px solid rgb(192, 78, 221); 
    border-style: solid;
    border-radius: 9px;
  }
  input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    size: 250px;
    top: 2px;}
    .row {
  display: flex;
  border-radius: 9px;
  
}

.column {
  flex: 50%;
}

.myButton {
	box-shadow:inset 34px 16px 0px 0px #ffffff;
	background:linear-gradient(to bottom, #ededed 5%, #ffadff 100%);
	background-color:#ededed;
	border-radius:13px;
	border:2px solid #db15db;
	display:inline-block;
	cursor:pointer;
	color:#f02df0;
	font-family:Arial;
    position: relative;
    left: 30%;
	font-size:23px;
	font-weight:bold;
	padding:14px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #ffffff;
}
.myButton:hover {
	background:linear-gradient(to bottom, #ffadff 5%, #ededed 100%);
	background-color:#ffadff;
}
.myButton:active {
	position:relative;
	top:1px;
}


.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
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

  h3 {
    color: #963b96;
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
    color: rgb(180, 29, 255);
    text-transform: uppercase;
    font-size: 1.325em;
    font-weight: 700;
    line-height: 1;
    /* margin: 0 0 1.777777778em; */
    transition: color 0.45s ease;
  }      
</style>