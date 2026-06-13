<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  description?: string
}>()
</script>

<template>
  <div class="mb-4">
    <p v-if="eyebrow" class="text-uppercase text-primary fw-semibold small mb-2">
      {{ eyebrow }}
    </p>
    <h2 class="h3 fw-bold mb-2">{{ title }}</h2>
    <p v-if="description" class="lead text-body-secondary mb-0">
      {{ description }}
    </p>
  </div>
</template>
