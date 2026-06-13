<script setup lang="ts">
defineProps<{
  items: Array<{
    label: string
    value: string
  }>
}>()
</script>

<template>
  <dl class="row mb-0">
    <template v-for="item in items" :key="item.label">
      <dt class="col-sm-4 text-body-secondary fw-normal">{{ item.label }}</dt>
      <dd class="col-sm-8">{{ item.value }}</dd>
    </template>
  </dl>
</template>
