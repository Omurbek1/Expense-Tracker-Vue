<template>
  <h3>Add new transaction</h3>
  <form id="form" @submit.prevent="addTransaction">
    <div class="form-control">
      <label for="text">Text</label>
      <input type="text" id="text" placeholder="Enter text..." v-model="text" />
    </div>
    <div class="form-control">
      <label for="amount"
        >Amount <br />
        (negative - expense, positive - income)</label
      >
      <input
        type="number"
        id="amount"
        v-model="amount"
        placeholder="Enter amount..."
      />
    </div>
    <button class="btn">Add transaction</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { toast } from 'vue3-toastify';
const emit = defineEmits(['transactionSubmitted']);


const text = ref('')
const amount = ref(0)

const addTransaction = () => {
   if (!text.value || !amount.value) {
    // Display a toast error message if either field is empty
    toast.error('Both fields must be filled.');
    return;
  }

  const addTransactionData={
    text:text.value,
    amount:amount.value
  }

  text.value = ''
  amount.value = 0

  emit('transactionSubmitted',addTransactionData)
}
</script>
