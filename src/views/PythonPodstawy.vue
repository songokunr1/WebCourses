<template>
  <br>
  <div>
    <CourseDetails :topic="workshopTopic" :paragraphs="workshopParagraphs" />
  </div>
</template>

<script>
import CourseDetails from '@/components/CourseDetails.vue';

export default {
  components: {
    CourseDetails
  },
  data() {
    return {
      workshopTopic: 'Python Podstawy',
      workshopParagraphs: [
        'Zapraszamy do udziału w naszym warsztacie "Python dla początkujących". Ten intensywny kurs ma na celu zapoznanie Cię z podstawami języka programowania Python i wyposażenie w niezbędne umiejętności programistyczne.',
        'Podczas warsztatu nauczysz się podstawowej składni Pythona, typów danych, struktur kontrolnych oraz podstawowych koncepcji programowania. Poznasz techniki rozwiązywania problemów i pisanie efektywnego i czytelnego kodu.',
        'Nasze zajęcia będą prowadzone w sposób interaktywny, z praktycznymi przykładami i ćwiczeniami, które umożliwią Ci natychmiastowe stosowanie poznanych umiejętności. Będziesz miał/a również możliwość zadawania pytań i uzyskiwania wsparcia od naszych doświadczonych instruktorów.',
        'Nie potrzebujesz wcześniejszego doświadczenia w programowaniu, aby wziąć udział w tym warsztacie. Jest on odpowiedni zarówno dla osób, które dopiero zaczynają swoją przygodę z programowaniem, jak i dla tych, którzy chcą odświeżyć swoje umiejętności i pogłębić swoją wiedzę na temat Pythona.',
        'Dołącz do naszego warsztatu "Python dla początkujących" i rozpocznij swoją przygodę z programowaniem!'
      ]
    };
  }
};
</script>
