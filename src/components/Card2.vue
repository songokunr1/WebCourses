<template>
    <div class="card">
      <el-card :body-style="{ padding: '20px' }">
        <img
          class="card-image"
          src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
          alt="Card Image"
        />
        <div class="card-body">
          <h3 class="card-title">{{ topic }}</h3>
          <p class="card-price">{{ price }}</p>
          <p class="card-description">{{ description }}</p>
          <ul class="card-points">
            <li v-for="point in points" :key="point">{{ point }}</li>
          </ul>
          <div class="card-footer">
            <p class="card-schedule">{{ schedule }}</p>
            <div class="card-buttons">
              <el-button class="buy-button" type="primary">Buy It Now</el-button>
              <el-button class="more-button" type="text">See More</el-button>
            </div>
          </div>
        </div>
      </el-card>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      topic: String,
      price: String,
      description: String,
      points: Array,
      schedule: String
    }
  };
  </script>
  
  <style scoped>
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
  
  .card-buttons {
    display: flex;
  }
  
  .buy-button,
  .more-button {
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 5px;
  }
  
  .buy-button {
    background-color: #4caf50;
    color: #fff;
    margin-right: 10px;
  }
  
  .more-button {
    background-color: transparent;
    color: #888;
  }
  </style>