<template>
    <div class="card">
    <form @submit.prevent="submit">
      <v-text-field
        v-model="name.value.value"
        :counter="3"
        maxlength="15"
        :error-messages="name.errorMessage.value"
        label="Imię"
      ></v-text-field>

      <v-text-field
        v-model="surename.value.value"
        :counter="3"
        maxlength="15"
        :error-messages="surename.errorMessage.value"
        label="Nazwisko"
      ></v-text-field>

      <v-text-field
        v-model="phone.value.value"
        :counter="9"
        maxlength="9"
        :error-messages="phone.errorMessage.value"
        label="Phone Number"
      ></v-text-field>
  
      <v-text-field
        v-model="email.value.value"
        :error-messages="email.errorMessage.value"
        label="E-mail"
      ></v-text-field>
  
      <v-select
        v-model="select.value.value"
        :items="items"
        :error-messages="select.errorMessage.value"
        label="Select"
      ></v-select>

      <v-textarea
        v-model="text.value.value"
        :counter="150"
        maxlength="150"
        :error-messages="text.errorMessage.value"
        label="Wiadomość"
      ></v-textarea>
  
      <v-checkbox
        v-model="checkbox.value.value"
        :error-messages="checkbox.errorMessage.value"
        value="1"
        label="Zgadzam się na przetwarzanie danych w celu nawiązania kontaktu i/lub przedstawieniu oferty"
        type="checkbox"
        
      ></v-checkbox>
  
      <v-btn
        class="me-4"
        type="submit"
      >
        submit
      </v-btn>
  
      <v-btn @click="handleReset">
        clear
      </v-btn>
    </form>
</div>
  </template>
  <script>
    import { ref } from 'vue'
    import { useField, useForm } from 'vee-validate'
  
    export default {
      setup () {
        const { handleSubmit, handleReset } = useForm({
          validationSchema: {
            name (value) {
              if (value?.length >= 2) return true
  
              return 'Name needs to be at least 2 characters.'
            },
            phone (value) {
              if (value?.length >= 9 && /[0-9-]+/.test(value)) return true
  
              return 'Phone number needs to be at least 9 digits.'
            },
            email (value) {
              if (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value)) return true
  
              return 'Must be a valid e-mail.'
            },
            select (value) {
              if (value) return true
  
              return 'Select an item.'
            },
            checkbox (value) {
              if (value === '1') return true
  
              return 'Must be checked.'
            },
            // text (value) {
            //   if (value?.length <= 150 ) return true
  
            //   return 'Max 150 chars'
            // },
          },
        })
        const name = useField('name')
        const surename = useField('surename')
        const phone = useField('phone')
        const email = useField('email')
        const text = useField('text')

        const select = useField('select')
        const checkbox = useField('checkbox')
        checkbox.value.value = '1'
  
        const items = ref([
          'Korepetycje',
          'Python od Podstaw',
          'Python Programowanie Obiektowe',
          'Python wstęp do Analizy Danych',
          
          // 'Python testing',
          // 'Python wstęp do Big Data',
          'Python Machine Learning',
          // 'Databricks Exploration',
          // 'Python wstęp do Data Enginier'
          'Inny',
        ])
  
        const submit = handleSubmit(values => {
          alert(JSON.stringify(values, null, 2))
        })
  
        return { name, surename, phone, email, select, text, checkbox, items, submit, handleReset }
      },
    }
  </script>
  <style scoped>

.card {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }

</style>