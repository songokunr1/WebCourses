<template>
  <v-container fluid>
    <v-row justify="left">
      <v-col
        v-for="course in courses"
        :key="course.topic"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        offset-lg="1"
        offset-md="1"
        offset-sm="2"
      >
        <card
          :topic="course.topic"
          :price="course.price"
          :hours="course.hours"
          :description="course.description"
          :points="course.points"
          :schedule="course.schedule"
          :groupSize="course.groupSize"
          :redirect="course.redirect"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Card from '@/components/Card2.vue';
import Form from '@/components/Form.vue';

export default {
  components: {
    Card,
    Form
  },
  data() {
    return {
      courses: [
        {
          topic: "Python Podstawy",
          price: "700zł",
          hours: "12h",
          description: "Pozwól wprowadzić się w świat Python!",
          points: [
            "Podstawy składni Pythona",
            "typy danych",
            "warunki",
            "funkcje",
            "twój pierwszy projekt"
          ],
          schedule: "Sobota i Niedziela 6-06-2023, 7-06-2023",
          groupSize: "2-4",
          redirect: "/PythonPodstawy"
        },
        {
          topic: "Vue.js Workshop",
          price: "700zł",
          hours: "12h",
          description: "Learn Vue.js fundamentals and build interactive web applications.",
          points: [
            "Introduction to Vue.js",
            "Vue Components",
            "Vue Router",
            "Vuex State Management",
            "API Integration"
          ],
          schedule: "Sobota i Niedziela 6-06-2023, 7-06-2023",
          groupSize: "2-4",
          redirect: "/PythonObjectOrientedProgramming"
        },
        {
          topic: "Vue.js Workshop",
          price: "700zł",
          hours: "12h",
          description: "Learn Vue.js fundamentals and build interactive web applications.",
          points: [
            "Introduction to Vue.js",
            "Vue Components",
            "Vue Router",
            "Vuex State Management",
            "API Integration"
          ],
          schedule: "Sobota i Niedziela 6-06-2023, 7-06-2023",
          groupSize: "2-4",
          redirect: "/PythonObjectOrientedProgramming"
        },
        {
          topic: "Vue.js Workshop",
          price: "700zł",
          hours: "12h",
          description: "Learn Vue.js fundamentals and build interactive web applications.",
          points: [
            "Introduction to Vue.js",
            "Vue Components",
            "Vue Router",
            "Vuex State Management",
            "API Integration"
          ],
          schedule: "Sobota i Niedziela 6-06-2023, 7-06-2023",
          groupSize: "2-4",
          redirect: "/PythonObjectOrientedProgramming"
        }
      ]
    };
  },
  methods: {
    redirectToForm() {
      this.$router.push('/form'); // Replace '/form' with the actual route path
    },
    getColumnSize(index, breakpoint = '') {
      const totalColumns = 12;
      const columnCount = this.courses.length;
      const maxColumnsPerRow = 3;
      const startIndex = maxColumnsPerRow - 1;

      if (columnCount <= maxColumnsPerRow) {
        // If the number of courses is less than or equal to the maximum columns per row,
        // distribute the columns equally.
        return Math.floor(totalColumns / columnCount).toString() + (breakpoint ? `-${breakpoint}` : '');
      } else {
        // If the number of courses exceeds the maximum columns per row,
        // calculate the column size based on the maximum columns per row.
        const columnIndex = index % maxColumnsPerRow;

        if (index < startIndex) {
          // For the first row of courses, distribute the columns from left to right.
          return Math.floor(totalColumns / maxColumnsPerRow).toString() + (breakpoint ? `-${breakpoint}` : '');
        } else {
          // For the subsequent rows of courses, distribute the columns equally.
          const columnsPerRow = Math.ceil(columnCount / Math.ceil(columnCount / maxColumnsPerRow));
          return Math.floor(totalColumns / columnsPerRow).toString() + (breakpoint ? `-${breakpoint}` : '');
        }
      }
    }
  }
};
</script>
