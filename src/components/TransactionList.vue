<template>
  <h3>History</h3>
  <ul id="list" class="list">
    <li
      v-for="transaction in transactions"
      :key="transaction.id"
      :class="transaction.amount < 0 ? 'minus' : 'plus'"
    >
      {{ transaction.text }} <span>{{ transaction.amount.toFixed(2) }}</span
      ><button @click="deleteTransaction(transaction.id)" class="delete-btn">
        x
      </button>
    </li>
    <!-- total  -->

    <li v-if="!transactions.length">
      <p class="list-item">No transactions yet 😢</p>
    </li>
  </ul>
</template>

<script setup lang="ts">
import {defineProps} from 'vue'
const emit = defineEmits(['deleteTransaction']);

defineProps({
  transactions: Array as any
})
const deleteTransaction = (id: number) => {
  emit('deleteTransaction', id)
}
</script>
