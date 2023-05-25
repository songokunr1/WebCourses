<template>
  <div id="app">

    <ResponsiveNavigation
      :nav-links="navLinks"
      :image-path="'./assets/logo.png'"
      background="#fff"
      link-color="#777"
      hoverBackground="#ddd"
    />
  </div>
  <div class="background">
  <div>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component"/>
      </transition>

    </router-view>
    </div>
  </div>
</template>

<script>
import ResponsiveNavigation from '@/components/ResponsiveNavigation'
import Card from '@/components/Card.vue'

export default {
  components: {
    ResponsiveNavigation, Card
  },
  data: () => ({
    navLinks: [
      {
        text: 'Kontakt',
        path: '/contact',
        icon: 'ion-ios-call'
      },
      {
        text: 'Kursy',
        path: '/courses',
        icon: 'ion-ios-paper'
      },
      //   {
      //     text: 'Blog',
      // path: '/blog',
      // icon: 'ion-ios-book'
      //   },
      //   {
      //     text: 'Portfolio',
      // path: '/portfolio',
      // icon: 'ion-ios-man'
      //   },
      {
        text: 'Zapytaj',
        path: '/form',
        icon: 'ion-ios-briefcase'
      }
      //   {
      //     text: 'Konsultacje',
      // path: '/consultation',
      // icon: 'ion-ios-briefcase'
      //   }
    ]
  })
}
</script>

<style lang="scss">
@import 'https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css';

figure {
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 10px;
  margin-inline-end: 0;
}

body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.main {
  margin: 65px 20% 10% 20%;
}

.router-link-exact-active {
  color: rgb(187, 141, 232);
  background: rgb(248, 221, 247);
}

.router-link-active {
  color: rebeccapurple;
  background: rgb(189, 174, 226);
  border-radius: 2px;
}

.background {
  background-color: #f2f2f2; /* Light grey background color */
  background-image: linear-gradient(to bottom right, #f2f2f2, #9c27b0); /* Gradient from light grey to purple */
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
