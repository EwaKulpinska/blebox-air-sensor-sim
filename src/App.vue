<template>
	<div class="wrapper">
		<nav>
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/about">About</RouterLink>
		</nav>
	</div>
	<RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted, ref } from "vue";
import { useSensorsStore } from "@/stores/sensors";

const sensorsStore = useSensorsStore();

const urls = ref([
	"http://localhost:5000",
	"http://localhost:5001",
	"http://localhost:5002",
]);

async function sendRequest(url) {
	const response = await fetch(url, {
		method: "GET",
		mode: "cors",
		headers: { "Content-Type": "application/json" },
	});
	const jsonResponse = await response.json();

	return jsonResponse.device;
}

onMounted(() => {
	urls.value.forEach(async (url) => {
		const finalURL = url + "/info";
		const sensorData = await sendRequest(finalURL);
		sensorsStore.saveSensorData(sensorData);
	});
});
</script>

<style scoped>
header {
	line-height: 1.5;
}

nav {
	display: flex;
	width: 100%;
	font-size: 12px;
	text-align: center;
	margin-top: 2rem;
}

nav a.router-link-exact-active {
	color: var(--color-text);
}

nav a.router-link-exact-active:hover {
	background-color: transparent;
}

nav a {
	display: inline-block;
	padding: 0 1rem;
	border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
	border: 0;
}

@media (min-width: 1024px) {
	header {
		display: flex;
		place-items: start;
		padding-right: calc(var(--section-gap) / 2);
	}

	header .wrapper {
		display: flex;
		place-items: flex-start;
		flex-wrap: wrap;
	}

	nav {
		text-align: left;
		margin-left: -1rem;
		font-size: 1rem;

		padding: 1rem 0;
		margin-top: 1rem;
	}
}
</style>
