<template>
    <div class="card">
    <v-card class="rounded-card">
      <v-card-text>
    <form @submit.prevent="submit">
      <v-text-field
        v-model="name.value.value"
        :counter="3"
        maxlength="15"
        :error-messages="name.errorMessage.value"
        label="Imię"
      ></v-text-field>

      <v-text-field
        v-model="surname.value.value"
        :counter="3"
        maxlength="15"
        :error-messages="surname.errorMessage.value"
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
        v-model="topic.value.value"
        :items="items"
        :error-messages="topic.errorMessage.value"
        label="Temat"
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
       </v-card-text>
    </v-card>
</div>
<br><br><br><br>
  </template>
  <script>
    import { ref } from 'vue'
    import { useField, useForm } from 'vee-validate'
    import axios from 'axios';
    import { useRouter } from 'vue-router';

    export default {
      setup () {
        const router = useRouter();

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
            topic (value) {
              if (value) return true

              return 'Select an item.'
            },
            checkbox (value) {
              if (value === '1') return true

              return 'Must be checked.'
            },
            text (value) {
              if (value?.length <= 350 ) return true

              return 'Max 150 chars'
            },
          },
        })
        const name = useField('name')
        const surname = useField('surname')
        const phone = useField('phone')
        const email = useField('email')
        const text = useField('text')

        const topic = useField('topic')
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

  //       const submit = handleSubmit(async values => {
  // try {
  //   const response = await axios.post('http://127.0.0.1:8888/send_email', JSON(values)
  //   );}
  //   catch (error) {
  //       // Handle any errors that occur during the API request
  //       console.error(error);
  //     }
  //     })



    const submit = handleSubmit(async values => {
  try {
    const response = await axios.post('/send_email', {
      name: values.name,
      surname: values.surname,
      phone: values.phone,
      email: values.email,
      topic: values.topic,
      text: values.text
      });
      // Handle the response from the API as needed
      console.log(response.data);
      } catch (error) {
        // Handle any errors that occur during the API request
        console.error(error);
      }
    //   try {
    // const response = await axios.post('http://127.0.0.1:8889/save_form_to_db', {
    //   name: values.name,
    //   surname: values.surname,
    //   phone: values.phone,
    //   email: values.email,
    //   topic: values.topic,
    //   text: values.text
    //   });
    //   // Handle the response from the API as needed
    //   console.log(response.data);
    //   } catch (error) {
    //     // Handle any errors that occur during the API request
    //     console.error(error);
    //   }
      router.push('/thankyou');
      })

        return { name, surname, phone, email, topic, text, checkbox, items, submit, handleReset }
      },
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
  background: linear-gradient(125deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 65%, rgba(194, 102, 255, 1) 87%, rgba(140, 0, 255, 1) 100%);
}

.error-card {
  background-color: #ffcccc;
}

.v-input--checkbox {
  margin-bottom: 12px;
}

.v-counter {
  display: none;
}

.v-messages {
  margin-top: 8px;
}

.v-btn {
  margin-top: 16px;
}
</style>
