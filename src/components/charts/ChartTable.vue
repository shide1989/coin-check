<template>
  <div class="block w-full overflow-x-auto">
    <!-- Projects table -->
    <table class="items-center w-full bg-transparent border-collapse">
      <thead>
        <tr>
          <th
            class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
            :class="[
              color === 'light'
                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                : 'bg-emerald-800 text-emerald-300 border-emerald-700'
            ]"
          >
            Project
          </th>
          <th
            class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
            :class="[
              color === 'light'
                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                : 'bg-emerald-800 text-emerald-300 border-emerald-700'
            ]"
          >
            Market Cap
          </th>
          <th
            class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
            :class="[
              color === 'light'
                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                : 'bg-emerald-800 text-emerald-300 border-emerald-700'
            ]"
          >
            Since
          </th>
          <th
            class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
            :class="[
              color === 'light'
                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                : 'bg-emerald-800 text-emerald-300 border-emerald-700'
            ]"
          >
            Reliability
          </th>
          <th
            class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
            :class="[
              color === 'light'
                ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                : 'bg-emerald-800 text-emerald-300 border-emerald-700'
            ]"
          ></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
          >
            <img :src="sketch" class="h-12 w-12 bg-white rounded-full border" alt="..." />
            <span
              class="ml-3 font-bold"
              :class="[color === 'light' ? 'text-blueGray-600' : 'text-white']"
            >
              Black Dashboard Sketch
            </span>
          </th>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            $3,150 USD
          </td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            <i class="fas fa-circle text-red-500 mr-2"></i> delayed
          </td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            <div class="flex items-center">
              <span class="mr-2">73%</span>
              <div class="relative w-full">
                <div class="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                  <div
                    style="width: 73%"
                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                  ></div>
                </div>
              </div>
            </div>
          </td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
          >
            <table-dropdown />
          </td>
        </tr>
        <tr>
          <th
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
          >
            <img :src="react" class="h-12 w-12 bg-white rounded-full border" alt="..." />
            <span
              class="ml-3 font-bold"
              :class="[color === 'light' ? 'text-blueGray-600' : 'text-white']"
            >
              React Material Dashboard
            </span>
          </th>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            $4,400 USD
          </td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            <i class="fas fa-circle text-teal-500 mr-2"></i> on schedule
          </td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            <div class="flex items-center">
              <span class="mr-2">90%</span>
              <div class="relative w-full">
                <div class="overflow-hidden h-2 text-xs flex rounded bg-teal-200">
                  <div
                    style="width: 90%"
                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"
                  ></div>
                </div>
              </div>
            </div>
          </td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
          >
            <table-dropdown />
          </td>
        </tr>
        <tr>
          <th
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
          >
            <img :src="vue" class="h-12 w-12 bg-white rounded-full border" alt="..." />
            <span
              class="ml-3 font-bold"
              :class="[color === 'light' ? 'text-blueGray-600' : 'text-white']"
            >
              React Material Dashboard
            </span>
          </th>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            $2,200 USD
          </td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            <i class="fas fa-circle text-emerald-500 mr-2"></i>
            completed
          </td>

          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            <div class="flex items-center">
              <span class="mr-2">100%</span>
              <div class="relative w-full">
                <div class="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
                  <div
                    style="width: 100%"
                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                  ></div>
                </div>
              </div>
            </div>
          </td>
          <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
          >
            <TableDropdown />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup lang="ts">
import TableDropdown from '@/components/dropdowns/TableDropdown.vue'

import sketch from '@/assets/img/sketch.jpg'
import react from '@/assets/img/react.jpg'
import vue from '@/assets/img/react.jpg'

defineProps({
  color: String
})
</script>
