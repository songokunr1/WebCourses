<template>
  <br><br><br><br><br>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="card rounded-card">
          <v-card-title class="text-center text-h6">
            Dziękuję za wypełnienie formularza
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
</template>

<script>
export default {
  name: 'ThankYouPage',
}
</script>

<style scoped>
.card {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

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
}

.text-center {
  text-align: center;
}

.card p {
  margin-top: 16px;
}
</style>
