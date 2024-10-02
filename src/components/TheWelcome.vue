<template>
	<h1>BleBox Air Sensors</h1>
	<div class="sensors">
		<div class="sensor">
			<button
				class="sensor-button"
				@click="
					sendRequest(`http://localhost:5002/info`, sensorsStore.setSensor5002),
						(sensor5002Clicked = !sensor5002Clicked)
				"
			>
				View sensor 5002
			</button>
			<div v-if="sensor5002Clicked" class="sensor-info">
				<p>Device name: {{ sensorsStore.checkSensor5002.deviceName }}</p>
				<p>Product: {{ sensorsStore.checkSensor5002.product }}</p>
				<p>ID: {{ sensorsStore.checkSensor5002.id }}</p>
				<p>IP: {{ sensorsStore.checkSensor5002.ip }}</p>
			</div>
		</div>
	</div>
</template>
<script setup>
import { useSensorsStore } from "@/stores/sensors";
import { ref } from "vue";

const sensorsStore = useSensorsStore();

let sensor5002Clicked = ref(false);

async function sendRequest(url, callback) {
	const response = await fetch(url, {
		method: "GET",
		mode: "cors",
		headers: { "Content-Type": "application/json" },
	});
	const jsonResponse = await response.json();
	callback(jsonResponse.device);

	return jsonResponse;
}
</script>

<style scoped lang="scss">
h1 {
	margin-bottom: 2rem;
}

.sensors {
	display: flex;
	margin: 1rem;
}
.sensor {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 2rem;
	&-info {
		margin-top: 1rem;
	}
}
</style>
