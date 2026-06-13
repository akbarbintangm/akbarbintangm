<script setup lang="ts">
defineProps<{
  items: Array<{
    label: string
    value: string
  }>
}>()
</script>

<template>
  <dl class="key-value-list mb-0">
    <div v-for="item in items" :key="item.label" class="key-value-item">
      <dt class="fw-normal">{{ item.label }}</dt>
      <dd class="mb-0">{{ item.value }}</dd>
    </div>
  </dl>
</template>
