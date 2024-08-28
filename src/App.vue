<script setup lang="ts">

import { ref, computed, onMounted } from 'vue'
import Header from './components/Header.vue'
import Balance from './components/Balance.vue'
import IncomeExpenses from './components/IncomeExpenses.vue'
import TransactionList from './components/TransactionList.vue'
import AddTransaction from './components/AddTransaction.vue'
import { toast } from 'vue3-toastify'


type Transaction = {
  id: number
  text: string
  amount: number
}

const transactions  = ref(<Transaction[]>[])

onMounted(() => {
  const saveTransactions = localStorage.getItem('transactions')

  if (saveTransactions) {
    transactions.value = JSON.parse(saveTransactions)
  }
})
const total = computed(() => transactions.value.reduce((acc, curr) => acc + curr.amount, 0))

const incomes = computed(() => transactions.value.filter(transaction => transaction.amount > 0).reduce((acc, curr) => acc + curr.amount, 0).toFixed(2))
const expenses = computed(() => transactions.value.filter(transaction => transaction.amount < 0).reduce((acc, curr) => acc + curr.amount, 0).toFixed(2))

const handleTransactionSubmitted = (transactionData: { text: string, amount: number }) => {
  transactions.value.push(
    {
      id: Math.floor(Math.random() * 1000000),
      text: transactionData.text,
      amount: transactionData.amount,
    }
  )
  saveTransactions()
  toast.success('Transaction added successfully')
  
}

const deleteTransaction = (id: number) => {
  transactions.value = transactions.value.filter(transaction => transaction.id !== id)
  toast.success('Transaction deleted successfully')
}
const saveTransactions = () => {
  localStorage.setItem('transactions', JSON.stringify(transactions.value))
}
</script>

<template>
  <Header />
  <div class="container">
    <Balance :total="+total" />
    <IncomeExpenses :incomes="+incomes" :expenses="+expenses" />
    <TransactionList
      :transactions="transactions"
      @deleteTransaction="deleteTransaction"
    />
    <AddTransaction @transactionSubmitted="handleTransactionSubmitted" />
  </div>
</template>

<style scoped></style>
