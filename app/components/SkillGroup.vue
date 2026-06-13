<script setup lang="ts">
defineProps<{
  group: {
    category: string
    items: string[]
  }
}>()
</script>

<template>
  <div class="card h-100">
    <div class="card-body">
      <h2 class="h5 card-title">{{ group.category }}</h2>
      <div class="d-flex flex-wrap gap-2">
        <span v-for="skill in group.items" :key="skill" class="badge text-bg-secondary fw-normal">
          {{ skill }}
        </span>
      </div>
    </div>
  </div>
</template>
