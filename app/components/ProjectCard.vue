<script setup lang="ts">
defineProps<{
  project: {
    name: string
    organization?: string
    period?: string
    description: string
    stack: string[]
  }
}>()
</script>

<template>
  <article class="card h-100">
    <div class="card-body">
      <p v-if="project.organization" class="text-uppercase text-primary fw-semibold small mb-2">
        {{ project.organization }}
      </p>
      <h2 class="h5 card-title">{{ project.name }}</h2>
      <p v-if="project.period" class="text-body-secondary mb-2">{{ project.period }}</p>
      <p>{{ project.description }}</p>
      <div class="d-flex flex-wrap gap-2">
        <span v-for="tech in project.stack" :key="tech" class="badge text-bg-secondary fw-normal">
          {{ tech }}
        </span>
      </div>
    </div>
  </article>
</template>
