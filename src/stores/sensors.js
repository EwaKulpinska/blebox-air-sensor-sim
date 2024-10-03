import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useSensorsStore = defineStore("sensors", () => {
	const sensorsList = ref([]);

	async function saveSensorData(sensorsData) {
		const sensor = {
			Name: sensorsData.deviceName,
			Product: sensorsData.product,
			Type: sensorsData.type,
			ID: sensorsData.id,
			IP: sensorsData.ip,
		};
		addSensor(sensor);
	}

	function addSensor(sensor) {
		sensorsList.value.push(sensor);
	}

	const checkSensorList = computed(() => {
		return sensorsList.value;
	});

	return { saveSensorData, addSensor, checkSensorList };
});
