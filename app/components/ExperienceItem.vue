<script setup lang="ts">
defineProps<{
  item: {
    company: string
    role: string
    period: string
    location: string
    summary: string
    bullets: string[]
    stack: string[]
  }
}>()
</script>

<template>
  <article class="card h-100">
    <div class="card-body">
      <div class="d-flex flex-column flex-lg-row justify-content-between gap-2 mb-3">
        <div>
          <p class="text-uppercase text-primary fw-semibold small mb-1">{{ item.company }}</p>
          <h2 class="h5 card-title mb-1">{{ item.role }}</h2>
          <p class="text-body-secondary mb-0">{{ item.location }}</p>
        </div>
        <p class="text-body-secondary mb-0">{{ item.period }}</p>
      </div>

      <p>{{ item.summary }}</p>

      <ul class="mb-3">
        <li v-for="bullet in item.bullets" :key="bullet">{{ bullet }}</li>
      </ul>

      <div class="d-flex flex-wrap gap-2">
        <span v-for="tech in item.stack" :key="tech" class="badge text-bg-light border">
          {{ tech }}
        </span>
      </div>
    </div>
  </article>
</template>
