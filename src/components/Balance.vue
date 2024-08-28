<template>
  <h4>Your Balance</h4>
  <h1 :style="balanceStyle" id="balance">${{ total }}</h1>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = defineProps({
  total: Number
})

const balanceStyle = computed(() => {
  return {
    color: props.total as number < 0 ? 'red' : 'black'
  }
})
</script>
