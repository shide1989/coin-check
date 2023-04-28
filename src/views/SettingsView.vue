<template>
  <div class="w-full mx-auto -m-16">
    <div class="flex flex-wrap my-4 mx-4">
      <div
        class="flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded"
        :class="[color === 'light' ? 'bg-white' : 'bg-emerald-900 text-white']"
      >
        <div class="rounded-t mb-0 px-4 py-3 border-0">
          <div class="flex flex-wrap items-center">
            <div class="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                class="font-semibold text-lg"
                :class="[color === 'light' ? 'text-blueGray-700' : 'text-white']"
              >
                Charts Tables
              </h3>
            </div>
          </div>
        </div>
        <ChartTable :color="color" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ChartTable from '@/components/charts/ChartTable.vue'

defineProps({
  color: {
    default: 'light',
    validator: function (value: string) {
      // The value must match one of these strings
      return ['light', 'dark'].indexOf(value) !== -1
    }
  }
})
</script>
