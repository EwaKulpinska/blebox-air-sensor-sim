<template>
	<div class="wrapper">
		<h1>This is the Home page</h1>
		<button
			class="wrapper-button"
			@click="sendRequest('http://localhost:5002/info')"
		>
			Check sensor
		</button>
	</div>
</template>
<script setup>
async function sendRequest(url) {
	const response = await fetch(url, {
		method: "GET",
		mode: "cors",
		headers: { "Content-Type": "application/json" },
	});
	const jsonResponse = await response.json();

	console.log(jsonResponse);
	return jsonResponse;
}
</script>

<style scoped lang="scss">
.wrapper {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	h1 {
		margin-bottom: 2rem;
	}
}
</style>
