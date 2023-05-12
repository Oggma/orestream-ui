<script setup lang="ts">
import { ref } from 'vue';
import CoreService from '@/services/CoreService';
import { WeatherForecastItem } from '@/models/WeatherForecastItem';

const items = ref<WeatherForecastItem[]>([]);

const getItems = async () => {
  items.value = await CoreService.get().then(resp => resp.data);
}
</script>

<template>
  <div>
    <button @click="getItems">PRESS</button>
    <div v-for="item in items">
      <span>{{ item.temperatureC }} C</span>
      <span>{{ item.temperatureF }} F</span>
    </div>
  </div>
</template>
