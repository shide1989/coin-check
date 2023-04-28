<template>
  <div>
    <a
      class="text-blueGray-500 py-1 px-3"
      href="#pablo"
      ref="btnDropdownRef"
      v-on:click="toggleDropdown($event)"
    >
      <i class="fas fa-ellipsis-v"></i>
    </a>
    <div
      ref="popoverDropdownRef"
      class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
      v-bind:class="{
        hidden: !dropdownPopoverShow,
        block: dropdownPopoverShow
      }"
    >
      <a
        href="javascript:void(0);"
        @click="remove"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
      >
        Remove
      </a>
      <a
        href="javascript:void(0);"
        @click="update"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
      >
        Update
      </a>
    </div>
  </div>
</template>
<script setup lang="ts">
import { createPopper } from '@popperjs/core'
import { ref } from 'vue'

let dropdownPopoverShow = ref(false)
let btnDropdownRef = ref(null)
let popoverDropdownRef = ref(null)

const props = defineProps<{ chartId: string }>()
const emit = defineEmits<{
  (e: 'remove', id: string): void
  (e: 'update', id: string): void
}>()

const remove = () => {
  emit('remove', props.chartId)
  console.log('remove')
  toggleDropdown(null, true)
}

const update = () => {
  emit('update', props.chartId)
  console.log('update')
  toggleDropdown(null, true)
}

const toggleDropdown = (event?: any, reset = false) => {
  event?.preventDefault()
  if (dropdownPopoverShow.value || reset) {
    dropdownPopoverShow.value = false
  } else {
    dropdownPopoverShow.value = true
    createPopper(btnDropdownRef.value!, popoverDropdownRef.value!, {
      placement: 'bottom-start'
    })
    setTimeout(() => toggleDropdown(null, true), 5 * 1000)
  }
}
</script>
