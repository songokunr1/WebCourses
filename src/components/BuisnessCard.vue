<template>

<div class="frame">
  <div class="center">

		<div class="profile">
			<div class="image">
				<div class="circle-1"></div>
				<div class="circle-2"></div>
       <img :src="iconUrl" width="165" height="165" alt="Paweł Matejko" />

			</div>

			<div class="name">Paweł Matejko</div>
			<div class="job">Analist, Data Engineer</div>
			<div class="job">pasjonat nauczania Pythona</div><br>
        <v-btn class="pink white--text">
    <v-icon class="icon" size="40" @click="openLink('https://www.linkedin.com/in/pawe%C5%82-matejko-73730516a/')">mdi-linkedin</v-icon>
  </v-btn>
  <v-btn class="pink white--text" >
    <v-icon class="icon" size="36" @click="openLink('https://github.com/songokunr1')">mdi-github</v-icon>
  </v-btn>
    <v-btn class="pink white--text" >
      <v-icon class="icon" size="40" @click="openEmail('pawelm18@gmail.com')">mdi-email</v-icon>
  </v-btn>
			<div class="actions">
				<button class="btn" @click="copy(tel)">+48514487406</button>
				<button class="btn" @click="copy(email)">pawelm18@gmail.com</button>
        <button class="big" color="primary" @click="copy(eKorepetycje)">
      <NotEl :tytul='tytul' :Notyfication='Notyfication' />

          https://www.e-korepetycje.net/matpaw/programowanie</button>
          <button class="big text-h7 "  @click="redirectToForm"> Kliknij aby wysłać formularz z zapytaniem!</button>

			</div>
		</div>

		<div class="stats">
			<div class="box">
				<span class="value">5+</span>
				<span class="parameter">lat doświadczenia</span>
			</div>
			<div class="box">
				<span class="value">40+</span>
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
import NotEl from '@/components/NotEl.vue'
import imgUrl from '@/assets/moje.jpg'

export default {
  components: {NotEl},
  data() {
    return {
       imageSrc: imgUrl,
       tel: '+48514487406',
       email: 'pawelm18@gmail.com',
       eKorepetycje: 'https://www.e-korepetycje.net/matpaw/programowanie',
       tytul: 'tytul',
       hejo: 'hejo',
       Notyfication: 0

    }
    },
        methods: {
          redirectToForm() {
          this.$router.push('/form'); // Replace '/form' with the actual route path
          },
          copy(text) {
            const input = document.createElement('input');
            input.value = text;
            document.body.appendChild(input);
            input.select();
            input.setSelectionRange(0, 99999); // For mobile devices
            document.execCommand('copy');
            document.body.removeChild(input);

            this.tytul = text;
            this.Notyfication = this.Notyfication + 1;
      },
      openLink(url) {
      window.open(url, '_blank');
    },
    openEmail(email) {
      window.location.href = `mailto:${email}`;
    }
    },
  computed: {
  iconUrl() {
    return imgUrl;
  }
}
}
</script>

<style scoped>
 @import url(https://fonts.googleapis.com/css?family=Open+Sans:600,300);

.center {
  position: relative;
  top: 30px;
  left: 30px;
  height: 679px;
  width: 360px;
  background: #fff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
}
.profile {
  float: left;
  width: 220px;
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
  width: 165px;
  height: 165px;
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
  margin-top: 23px;
}
.profile .actions .btn {
  display: block;
  width: 330px;
  height: 50px;
  margin: 0 auto 10px 15px;
  background: none;
  border: 1px solid #7e52e4;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 600;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
  color: #7f5fd6;
  font-size: 12px;
}
.profile .actions .big {
  display: block;
  width: 330px;
  height: 50px;
  margin: 0 auto 10px 15px;
  background: none;
  border: 1px solid #7e52e4;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 600;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
  color: #7f5fd6;
  font-size: 12px;
}
.profile .actions .btn:hover {
  background: #9338cf;
  color: #fff;
}

.profile .actions .big:hover {
  background: #9338cf;
  color: #fff;
}
.stats {
  float: left;
}
.stats .box {
  box-sizing: border-box;
  width: 140px;
  height: 130px;
  background: #e2cef3;
  text-align: center;
  padding-top: 23%;
  transition: all 0.4s ease-in-out;
}
.stats .box:hover {
  background: #c88eff;
  cursor: pointer;
}
.stats .box:nth-child(2) {
  margin: 1px 0;
}
.stats span {
  display: block;
}
.stats .value {
  font-size: 25px;
  font-weight: 600;
}
.stats .parameter {
  font-size: 19px;
}

@media (max-width: 768px) {
  .frame {
    width: 20%;
    margin: 0 360px 10px auto;
  }

}
</style>
