<script setup lang="ts">
const props = defineProps<{
  project: {
    name: string
    organization?: string
    period?: string
    description: string
    stack: string[]
    appLink: string
    previewImages: Array<{
      src: string
      alt: string
    }>
  }
}>()

const emit = defineEmits<{
  openGallery: [project: typeof props.project]
}>()
</script>

<template>
  <article class="card h-100 project-card">
    <button
      v-if="project.previewImages?.length"
      class="btn p-0 border-0"
      type="button"
      :aria-label="`Open ${project.name} gallery`"
      @click="emit('openGallery', project)"
    >
      <img
        class="card-img-top project-preview"
        :src="project.previewImages[0].src"
        :alt="project.previewImages[0].alt"
        loading="lazy"
      >
    </button>

    <div class="card-body">
      <p v-if="project.organization" class="text-uppercase text-primary fw-semibold small mb-2">
        <i class="fa-solid fa-building me-1"></i>{{ project.organization }}
      </p>
      <h2 class="h5 card-title">{{ project.name }}</h2>
      <p v-if="project.period" class="text-body-secondary mb-2">
        <i class="fa-regular fa-calendar me-1"></i>{{ project.period }}
      </p>
      <p>{{ project.description }}</p>

      <button
        v-if="project.previewImages?.length > 1"
        class="btn btn-link p-0 mb-3 text-decoration-none"
        type="button"
        @click="emit('openGallery', project)"
      >
        <i class="fa-regular fa-images me-1"></i>{{ project.previewImages.length }} preview images
      </button>

      <div class="d-flex flex-wrap gap-2">
        <span v-for="tech in project.stack" :key="tech" class="badge text-bg-secondary fw-normal">
          {{ tech }}
        </span>
      </div>

      <a class="btn btn-primary btn-sm mt-3" :href="project.appLink" target="_blank" rel="noopener noreferrer">
        <i class="fa-solid fa-up-right-from-square me-1"></i>Open App
      </a>
    </div>
  </article>
</template>
