<template>
  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
  </WelcomeItem>
</template>

<script setup>
import { ref } from 'vue'
import SupportIcon from '@/components/icons/IconSupport.vue'
import WelcomeItem from '@/components/WelcomeItem.vue'

const icon = ref('favorite')
</script>

<style scoped>
.icon-container {
  position: fixed;
  z-index: 9999;
}

.material-icons {
  font-size: 36px;
  color: #333;
}
</style>
