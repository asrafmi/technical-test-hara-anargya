<template>
  <div>
    <div class="flex flex-col gap-5">
      <div class="flex flex-row gap-5">
        <Card
          v-for="(item, index) in transactionData"
          :key="index"
          :title="item.title"
          :amount="formatAmount(item.amount)"
          :icon="item.icon"
          :trendIcon="item.trendIcon"
          :percentage="item.percentage"
          :period="item.period"
          :action="item.action"
        />
      </div>
      <div>
        <h1>table</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
  import Card from './components/Card.vue';
  import { formatAmount } from '../../utils/general';
  import { transactionData } from '../../data/dashboard.js';
</script>
