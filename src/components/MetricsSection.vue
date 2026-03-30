<template>
  <section class="section">
    <h2>Impact</h2>
    <div class="metrics-grid">
      <div v-for="metric in metrics" :key="metric.label" class="metric-card">
        <span class="metric-value">{{ metric.value }}</span>
        <span class="metric-label">{{ metric.label }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { metrics } from "../data/metrics";
</script>
