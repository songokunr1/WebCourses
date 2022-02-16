<template>
<div class="frame">
  <div class="center">
    
		<div class="profile">
			<div class="image">
				<div class="circle-1"></div>
				<div class="circle-2"></div>
			</div>
			
			<div class="name">Paweł Matejko</div>
			<div class="job">Analist, Data Engineer</div>
			<div class="job">pasjonat nauczania Pythona</div>
			<div class="actions">
				<button class="btn">+48514487406</button>
				<button class="btn">pawelm18@gmail.com</button>
        <button style="font-size: 10px;" class="btn">https://www.e-korepetycje.net/matpaw/programowanie</button>
			</div>
		</div>
		
		<div class="stats">
			<div class="box">
				<span class="value">+4</span>
				<span class="parameter">lat doświadczenia</span>
			</div>
			<div class="box">
				<span class="value">30+</span>
				<span class="parameter">uczniów</span>
			</div>
			<div class="box">
				<span class="value">100%</span>
				<span class="parameter">zaangażowania</span>
			</div>
		</div>
  </div>
</div>
</template>

<script>
export default {
  data: {
      // imageSrc: '@/public/moje.jpg'
    }
}
</script>

<style scoped>
 @import url(https://fonts.googleapis.com/css?family=Open+Sans:600,300); 

.center {
  position: relative;
  top: 50px;
  left: 40px;
  height: 559px;
  width: 520px;
  background: #fff;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
}
.profile {
  float: left;
  width: 300px;
  height: 420px;
  text-align: center;
}
.profile .image {
  position: relative;
  width: 170px;
  height: 170px;
  margin: 78px auto 0 auto;
}
.profile .image .circle-1, .profile .image .circle-2 {
  position: absolute;
  box-sizing: border-box;
  width: 170px;
  height: 170px;
  top: -3px;
  left: -3px;
  border-width: 1px;
  border-style: solid;
  border-color: #786450 #786450 #786450 transparent;
  border-radius: 50%;
  transition: all 1.5s ease-in-out;
}
.profile .image .circle-2 {
  width: 162px;
  height: 162px;
  top: -6px;
  left: -6px;
  border-color: #786450 transparent #786450 #786450;
}
.profile .image img {
  display: block;
  border-radius: 50%;
  background: #F5E8DF;
}
.profile .image:hover {
  cursor: pointer;
}
.profile .image:hover .circle-1, .profile .image:hover .image .circle-2, .profile .image .image:hover .circle-2 {
  transform: rotate(360deg);
}
.profile .image:hover .circle-2 {
  transform: rotate(-360deg);
}
.profile .name {
  font-size: 20px;
  font-weight: 600;
  margin-top: 20px;
}
.profile .job {
  font-size: 15px;
  line-height: 15px;
}
.profile .passion {
  font-size: 15px;
  line-height: 15px;
}
.profile .actions {
  margin-top: 33px;
}
.profile .actions .btn {
  display: block;
  width: 220px;
  height: 50px;
  margin: 0 auto 10px auto;
  background: none;
  border: 1px solid #7e52e4;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 600;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
  color: #7f5fd6;
}
.profile .actions .btn:hover {
  background: #9338cf;
  color: #fff;
}
.stats {
  float: left;
}
.stats .box {
  box-sizing: border-box;
  width: 200px;
  height: 160px;
  background: #b74bff;
  text-align: center;
  padding-top: 28px;
  transition: all 0.4s ease-in-out;
}
.stats .box:hover {
  background: #d957fa;
  cursor: pointer;
}
.stats .box:nth-child(2) {
  margin: 1px 0;
}
.stats span {
  display: block;
}
.stats .value {
  font-size: 18px;
  font-weight: 600;
}
.stats .parameter {
  font-size: 15px;
}



</style>