import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useSensorsStore = defineStore("sensors", () => {
	const sensorsList = ref([]);

	function clearSensorsList() {
		sensorsList.value = [];
	}

	async function saveSensorData(sensorsData, url) {
		const sensor = {
			Address: url,
			Name: sensorsData.deviceName,
			Product: sensorsData.product,
			Type: sensorsData.type,
			ID: sensorsData.id,
		};
		addSensor(sensor);
	}

	function addSensor(sensor) {
		sensorsList.value.push(sensor);
	}

	const checkSensorList = computed(() => {
		return sensorsList.value;
	});

	return { clearSensorsList, saveSensorData, addSensor, checkSensorList };
});
