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

const slug = computed(() =>
  props.project.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
)

const modalId = computed(() => `project-gallery-${slug.value}`)
</script>

<template>
  <article class="card h-100 shadow-sm">
    <button
      v-if="project.previewImages?.length"
      class="btn p-0 border-0"
      type="button"
      data-bs-toggle="modal"
      :data-bs-target="`#${modalId}`"
      :aria-label="`Open ${project.name} gallery`"
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

      <div v-if="project.previewImages?.length > 1" class="row g-2 mb-3">
        <div v-for="image in project.previewImages.slice(1, 4)" :key="image.src" class="col-4">
          <button
            class="btn p-0 border w-100"
            type="button"
            data-bs-toggle="modal"
            :data-bs-target="`#${modalId}`"
            :aria-label="`Open preview ${image.alt}`"
          >
            <img class="img-fluid rounded project-preview-sm" :src="image.src" :alt="image.alt" loading="lazy">
          </button>
        </div>
      </div>

      <div class="d-flex flex-wrap gap-2">
        <span v-for="tech in project.stack" :key="tech" class="badge text-bg-secondary fw-normal">
          {{ tech }}
        </span>
      </div>

      <a class="btn btn-primary btn-sm mt-3" :href="project.appLink" target="_blank" rel="noopener noreferrer">
        <i class="fa-solid fa-up-right-from-square me-1"></i>Open App
      </a>
    </div>

    <div
      :id="modalId"
      class="modal fade"
      tabindex="-1"
      :aria-labelledby="`${modalId}-label`"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-fullscreen-lg-down modal-xl modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <div>
              <h2 :id="`${modalId}-label`" class="modal-title h5">{{ project.name }}</h2>
              <p class="mb-0 text-body-secondary">Preview gallery</p>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row g-3">
              <div v-for="image in project.previewImages" :key="image.src" class="col-12 col-lg-6">
                <img class="img-fluid rounded border shadow-sm" :src="image.src" :alt="image.alt" loading="lazy">
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a class="btn btn-primary" :href="project.appLink" target="_blank" rel="noopener noreferrer">
              <i class="fa-solid fa-up-right-from-square me-1"></i>Open App
            </a>
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
