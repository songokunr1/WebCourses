<template>
  <v-card class="rounded-card" :outlined="false">
    <v-card-text class="card-body">
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-card-title>
              <h3 class="card-title">{{ topic }}</h3>
            </v-card-title>
          </v-col>
          <v-col cols="12" v-for="(paragraph, index) in paragraphs" :key="index">
            <p class="card-paragraph">{{ paragraph }}</p>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="6">
            <v-btn block color="primary" @click="redirectToForm">Zapisz się!</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    topic: {
      type: String,
      required: true
    },
    paragraphs: {
      type: Array,
      required: true
    }
  },
  methods: {
    redirectToForm() {
      this.$router.push('/form'); // Replace '/form' with the actual route path
    }
  }
}
</script>

<style scoped>
.rounded-card {
  border-radius: 30px;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    125deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 65%,
    rgba(194, 102, 255, 1) 87%,
    rgba(140, 0, 255, 1) 100%
  );

  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

.card-body {
  margin-top: 20px;
  padding: 20px;
}

.card-title {
  font-size: 24px;
  margin: 0;
}

.card-paragraph {
  font-size: 16px;
  line-height: 1.5;
  margin: 10px 0;
}

.v-btn {
  margin-top: 20px;
}
</style>
