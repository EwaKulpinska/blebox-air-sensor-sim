<template>
	<h1>BleBox Air Sensors</h1>
	<ul class="wrapper">
		<li
			v-for="sensor in sensorsStore.checkSensorList"
			class="sensors"
			:key="sensor"
		>
			<ul class="sensor">
				<li v-for="(value, key) in sensor" class="sensor-info" :key="value">
					<p v-if="key !== 'ID'">{{ key }}: {{ value }}</p>
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
	text-align: center;
}

.wrapper {
	list-style: none;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
}

.sensor {
	display: flex;
	flex-direction: column;
	align-items: start;
	padding: 2.5rem;
	list-style: none;
	border: thick double #32a1ce;
	&:hover {
		background-color: hsla(160, 100%, 37%, 0.2);
	}
}
</style>
