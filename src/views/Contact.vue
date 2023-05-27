<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12">
        <div class="toMid">
          <Details />
        </div>
      </v-col>
    </v-row>
  </v-container>

  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
</template>

<script>
import Details from "@/components/Details.vue";
import Form from "@/components/Form.vue";

export default {
  components: { Details, Form },
  methods: {
    openLink(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<style scoped>
.toMid {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  margin-top: 60px;
}

.contact-text {
  text-align: center;
  margin-bottom: 20px;
}
</style>
