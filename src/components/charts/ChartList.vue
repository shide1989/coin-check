<template>
  <div v-if="loaded" class="flex flex-wrap">
    <div
      class="relative min-w-0 break-words my-4 mx-4 shadow-lg rounded bg-blueGray-700"
      v-for="chart in charts"
      :key="chart.id"
    >
      <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
        <div class="flex flex-wrap items-center">
          <div class="relative w-full max-w-full flex-grow flex-1">
            <h6 class="uppercase text-blueGray-100 text-xs font-semibold">
              {{ chart.title }}
            </h6>
            <!--            <h2 class="text-white text-xl font-semibold">{{ chart.title }}</h2>-->
          </div>
        </div>
      </div>
      <div class="p-4 flex-auto">
        <!-- Chart -->
        <div class="relative">
          <iframe
            :id="'dextools-widget-' + chart.title"
            :title="chart.title"
            width="600"
            height="500"
            :src="`https://www.dextools.io/widgets/en/ether/pe-light/${chart.id}?${chart.query}`"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'

import { useChartStore } from '../../../stores/charts'

const chartStore = useChartStore()
const { charts, loaded } = storeToRefs(chartStore)

onMounted(() => {
  chartStore.loadCharts()
})
</script>

<style scoped></style>
