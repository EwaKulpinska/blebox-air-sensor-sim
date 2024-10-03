<template>
	<h1>BleBox Air Sensors</h1>
	<ul>
		<li
			v-for="sensor in sensorsStore.checkSensorList"
			class="sensors"
			:key="sensor"
		>
			<ul class="sensor">
				<li v-for="(value, key) in sensor" class="sensor-info" :key="value">
					<p>{{ key }}: {{ value }}</p>
				</li>
			</ul>
		</li>
	</ul>
</template>
<script setup>
import { useSensorsStore } from "@/stores/sensors";

const sensorsStore = useSensorsStore();
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
