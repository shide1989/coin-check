<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100"
  >
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form>
        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">Add a new pair</h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                for="pair_name"
              >
                Pair Name
              </label>
              <input
                type="text"
                id="pair_name"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="DOGE/WETH"
                v-model="pairName"
              />
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                for="contract_address"
              >
                Contract Address
              </label>
              <input
                type="text"
                id="contract_address"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="0x0000..."
                v-model="contractAddress"
              />
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <button
                class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                @click="addPair"
              >
                Add
              </button>
            </div>
          </div>
        </div>

        <hr class="mt-6 border-b-1 border-blueGray-300" />
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">

import { ref } from 'vue'
import { useChartStore } from '../../../stores/charts'
import type { ChartItem } from '../../../stores/chart.interface'

const pairName = ref('')
const contractAddress = ref('')

const store = useChartStore()

const addPair = () => {
  console.log('trying to addChart')
  if (!pairName.value || !contractAddress.value) {
    return console.error('fields required')
  }
  store.addChart({
    id: contractAddress.value,
    title: pairName.value,
    query: 'theme=dark&chartType=1&chartResolution=15&drawingToolbars=false'
  } as ChartItem)

  pairName.value = ''
  contractAddress.value = ''
}
</script>
