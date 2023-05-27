<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <ThankYouPage />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ThankYouPage from "@/components/ThankYouPage.vue";

export default {
  components: {
    ThankYouPage,
  },
}
</script>
