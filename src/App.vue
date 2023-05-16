<template>
  <div id="app">
    
    <ResponsiveNavigation
		:nav-links="navLinks"
		:image-path="require('./assets/logo.png')"
		background="#fff"
		link-color="#777"
		hoverBackground="#ddd"
    />
  <!-- <div class="main"> -->
  <!-- </div> -->
  <!-- <nav>
    <router-link to="/">home</router-link> 
    <router-link to="/courses">kursy! </router-link> 
    </nav> -->
  </div>
  <router-view/>
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

.router-link-exact-active{
  color: rebeccapurple;
  background: rgb(245, 234, 234) ;
}
.router-link-active{
  color: rebeccapurple;
  background: rgb(75, 37, 170);
  border-radius: 2px;
}
</style>