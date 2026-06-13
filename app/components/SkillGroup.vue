<script setup lang="ts">
defineProps<{
  group: {
    category: string
    items: string[]
  }
}>()

const iconByCategory: Record<string, string> = {
  'Backend Development': 'fa-solid fa-server',
  'Frontend Development': 'fa-solid fa-display',
  'Database and Search': 'fa-solid fa-database',
  'Infrastructure and Workflow': 'fa-solid fa-cloud',
  'Integration and Product Work': 'fa-solid fa-plug'
}
</script>

<template>
  <div class="card h-100 profile-card">
    <div class="card-body">
      <div class="d-flex align-items-center gap-3 mb-3">
        <i :class="iconByCategory[group.category] ?? 'fa-solid fa-code'" class="section-icon"></i>
        <h2 class="h5 card-title mb-0">{{ group.category }}</h2>
      </div>
      <div class="d-flex flex-wrap gap-2">
        <span v-for="skill in group.items" :key="skill" class="badge text-bg-secondary fw-normal">
          {{ skill }}
        </span>
      </div>
    </div>
  </div>
</template>
