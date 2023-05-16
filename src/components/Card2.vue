<template>

  <div class="card">
    <el-card class="rounded-card" :body-style="{ padding: '20px'}">
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
        <br>
        <el-timeline>
          <el-timeline-item v-for="point in points" :key="point">{{ point }}</el-timeline-item>
        </el-timeline>
        <div class="card-footer">
          <div class="card-buttons">
            <v-btn block color="primary" class="buy-button" @click="redirectToForm">Zapisz się!</v-btn>
            <v-btn @click="redirectToReadMore" class="more-button" text>Przeczytaj więcej</v-btn>
          </div>
        </div>
      </div>
      <div>
        <!-- <Form /> -->
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
  min-width: 150px;
}

.more-button {
  background-color: transparent;
  color: rgb(29, 28, 28);
  border: 1px solid #888;
  border-radius: 5px;
  min-width: 150px;
  text-align: center;
  padding: 10px 20px;
  cursor: pointer;
}
</style>