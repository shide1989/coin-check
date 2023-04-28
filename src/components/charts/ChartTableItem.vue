<template>
  <tr>
    <th
      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
    >
      <img :src="sketch" class="h-12 w-12 bg-white rounded-full border" alt="..." />
      <span
        class="ml-3 font-bold"
        :class="[color === 'light' ? 'text-blueGray-600' : 'text-white']"
      >
        {{ chart.title }}
      </span>
    </th>
    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      ${{ chart.market_cap.toLocaleString('en-IN') }} USD
    </td>
    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      <i class="fas fa-circle text-red-500 mr-2"></i> {{ chart.status }}
    </td>
    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      <div class="flex items-center">
        <span class="mr-2">{{ chart.reliability }}%</span>
        <div class="relative w-full">
          <div class="overflow-hidden h-2 text-xs flex rounded" :class="bgColorClass">
            <div
              :style="`width: ${chart.reliability}%`"
              class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"
              :class="frontColorClass"
            ></div>
          </div>
        </div>
      </div>
    </td>
    <td
      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
    >
      <TableDropdown
        :chart-id="chart.id"
        @remove="(id) => emit('remove', id)"
        @update="(id) => emit('update', id)"
      />
    </td>
  </tr>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import TableDropdown from '@/components/dropdowns/TableDropdown.vue'
import sketch from '@/assets/img/sketch.jpg'

import type { ChartItem } from '../../../stores/chart.interface'

interface Props {
  chart: ChartItem
  color: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'remove', id: string): void
  (e: 'update', id: string): void
}>()

const bgColorClass = computed<string>(() =>
  props.chart.reliability >= 99
    ? 'bg-teal-200'
    : props.chart.reliability > 66
    ? 'bg-emerald-200'
    : props.chart.reliability > 33
    ? 'bg-orange-200'
    : 'bg-red-200'
)

const frontColorClass = computed<string>(() => bgColorClass.value.replace('-200', '-500'))
</script>
