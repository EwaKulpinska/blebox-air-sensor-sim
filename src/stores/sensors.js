import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useSensorsStore = defineStore("sensors", () => {
	const sensor5002 = ref({});
	const checkSensor5002 = computed(() => sensor5002.value);

	function setSensor5002(data) {
		sensor5002.value = data;
	}

	return { checkSensor5002, setSensor5002 };
});
