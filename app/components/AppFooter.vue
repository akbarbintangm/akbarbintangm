<script setup lang="ts">
defineProps<{
  profile: {
    name: string
    role: string
  }
  contacts: Array<{
    label: string
    value: string
    href: string
  }>
}>()

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-top bg-body-tertiary py-4 mt-auto">
    <div class="container">
      <div class="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
        <div>
          <p class="mb-1 fw-semibold">{{ profile.name }}</p>
          <p class="mb-0 text-body-secondary">
            Copyright {{ year }}. {{ profile.role }}.
          </p>
        </div>

        <div class="d-flex flex-wrap gap-2">
          <a
            v-for="contact in contacts.slice(0, 3)"
            :key="contact.label"
            class="btn btn-outline-secondary btn-sm"
            :href="contact.href"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ contact.label }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
