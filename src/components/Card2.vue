<template>
  <div class="card">
    <el-card class="rounded-card" :body-style="{ padding: '20px' }">
      <div class="card-body">
        <div class="card-header">
          <h3 class="card-title">{{ topic }}</h3>
        </div>
        <div class="card-details">
          <p class="card-schedule">{{ schedule }}</p>
          <p class="card-schedule">number of hours: {{ hours }}</p>
          <p class="card-group-size">Group Size: {{ groupSize }}</p>
        </div>
        <p class="card-price">{{ price }}</p>
        <p class="card-description">{{ description }}</p>
        <br />
        </div>
        <el-timeline>
          <el-timeline-item v-for="point in points" :key="point">{{ point }}</el-timeline-item>
        </el-timeline>
        <div class="card-footer">
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" class="left-button-col">
              <v-btn block color="primary" class="buy-button" @click="redirectToForm">
                <span class="button-text"> Zapisz się! </span>
              </v-btn>
            </v-col>
           <v-col cols="12" sm="6" class="left-button-col">
              <v-btn @click="redirectToReadMore" class="more-button" text>
                <span class="button-text">więcej</span>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </el-card>
  </div>
</template>


<script>
import Form from '@/components/Form.vue';

export default {
components: {
  Form
},
props: {
  topic: String,
  price: String,
  hours: String,
  description: String,
  points: Array,
  schedule: String,
  groupSize: String, // Added prop
  redirect: String
},
methods: {
  redirectToForm() {
    this.$router.push('/form'); // Replace '/form' with the actual route path
  },
  redirectToReadMore() {
    this.$router.push(this.redirect); // Replace '/form' with the actual route path
  }
}
}
</script>

<style scoped>
.rounded-card {
border-radius: 30px;
background: rgb(255,255,255);
background: linear-gradient(125deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 65%, rgba(194,102,255,1) 87%, rgba(140,0,255,1) 100%);
}
.card {
width: 100%;
max-width: 400px;
margin: 0 auto;
}
.card-image {
width: 100%;
height: 200px;
object-fit: cover;
}
.card-body {
margin-top: 20px;
}
.card-title {
font-size: 24px;
margin: 0;
}
.card-price {
font-size: 18px;
color: #888;
}
.card-description {
font-size: 16px;
line-height: 1.5;
}
.card-points {
margin-top: 10px;
padding-left: 20px;
}
.card-points li {
list-style-type: disc;
}
.card-footer {
margin-top: 20px;
display: flex;
justify-content: space-between;
align-items: center;
}
.card-schedule {
margin: 0;
font-size: 14px;
color: #888;
}
.card-group-size {
margin: 0;
font-size: 14px;
color: #888;
}
.card-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.buy-button {
  background-color: #4caf50;
  color: #fff;
  margin-right: 10px;
  min-width: 120px;
}

.more-button {
  flex: 1;
  margin-right: 10px;
}
.button-text {
  font-size: 10px;
}
.left-button-col {
  display: flex;
  justify-content: flex-start;
}
.text-right {
  text-align: right;
}
</style>
