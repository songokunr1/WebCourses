<template>
  <transition name="bounce">
<div class="details">
    <div class="row">
        <div class="column">
      <form>
          <label>Preferowane miejsce spotkania:</label>
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
  <div class="column " > 
      <BuisnessCard />

  </div>
    </div>
</div>
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
    position: fixed;
      width: 1100px;
      height: 900px;
      top: 150px;
      margin: 0 auto;
      /* background: #753bbd; */
      background: #753bbd;

      border-radius: 15px;
      box-shadow: 0 15px 60px rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 150px;
    box-shadow: 0 15px 60px rgba(0, 0, 0, 2.5);
}
.form {
    background: white;
}

form {
    width: 500px;
    height: 820px;
    margin: 30px auto;
    background: rgb(255, 255, 255);
    text-align: left;
    padding: 20px;
    border-radius: 16px;
    align-items: left;
    position: relative;
    top: px;
    left: 0px;
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

        
</style>