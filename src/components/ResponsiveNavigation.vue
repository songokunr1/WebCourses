<template>
	<nav :style="{ background: background || '#333' }">
		<ul :style="{ background: background || '#333' }" ref="nav">
			<figure class="image-logo" @click="toggleNav">
				<img :src="imagePath" height="120px" width="120px" />
			</figure>
			<li
				v-for="(link, index) in navLinks"
				:key="index"
				@mouseenter="$event.currentTarget.style.background = hoverBackground || '#999'"
				@mouseleave="$event.currentTarget.style.background = background || '#333'"
			>
				<router-link active-class="active"
					:to="link.path"
					:style="{ color: linkColor || '#DDD' }"
				>
					{{ link.text }}
					<i :class="link.icon" />
				</router-link>

			</li>

		</ul>
	</nav>
</template>

<script>
import imgUrl from "@/assets/moje.jpg";

export default {
	props: ['navLinks', 'background', 'linkColor', 'hoverBackground', 'imagePath'],
	methods: {
		toggleNav () {
			const nav = this.$refs.nav.classList
			nav.contains('active') ? nav.remove('active') : nav.add('active')
		}
	}

}
</script>

<style scoped lang="scss">
nav {
	height: 135px;
	width: 100%;
	box-shadow: 2px 2px 2px #CCC;
	background: blue;
	ul {
		display: flex;
		height: 100%;
		align-items: center;
		margin-block-start: 0;
		margin-block-end: 0;
		padding-inline-start: 0;
		box-shadow: 82px 2px 66px #CCC;
		justify-content: center;
		figure {
			cursor: pointer;
			margin-right: 10px;
		}
		a {
			text-decoration: none;
			display: flex;
			flex-direction: row-reverse;
			align-items: center;
		}
		i {
			margin-right: 10px;
			font-size: 75px;

		}
		li {
			list-style-type: none;
			padding: 10px 20px;

		}
	}
}
@media screen and (max-width: 759px) {
    nav {
        height: 85px; /* adjust the height */
        ul {
        display: flex;
		height: 100%;
		align-items: center;
		margin-block-start: 0;
		margin-block-end: 0;
		padding-inline-start: 0;
		box-shadow: 22px 2px 36px #CCC;
		justify-content: center;
		figure {
			cursor: pointer;
			margin-right: 10px;
			margin-left: 10px;
		}
		a {
			text-decoration: none;
			display: flex;
			flex-direction: row-reverse;
			align-items: center;
		}
		i {
			margin-right: 10px;
			font-size: 30px;

		}
		li {
			list-style-type: none;
			padding: 10px 10px;

		}
        }
    }
}
#router-link-exact-active{
//   color: rebeccapurple;
  background: red($color: #4f13af);
}
a {
	border-radius: 10%;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease-in-out;
}
</style>
