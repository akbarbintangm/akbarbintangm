<script setup lang="ts">
type GalleryProject = {
  name: string
  appLink: string
  previewImages: Array<{
    src: string
    alt: string
  }>
}

const props = defineProps<{
  project: GalleryProject | null
}>()

const emit = defineEmits<{
  closed: []
}>()

const activeIndex = ref(0)

watch(
  () => props.project,
  () => {
    activeIndex.value = 0
  }
)
</script>

<template>
  <div
    v-if="project"
    class="lightbox-backdrop"
    role="dialog"
    aria-modal="true"
    :aria-label="`${project.name} preview gallery`"
    @click.self="emit('closed')"
  >
    <section class="lightbox-panel">
      <header class="lightbox-header">
        <div>
          <h2 class="h5 mb-1">{{ project.name }}</h2>
          <p class="mb-0 text-body-secondary">Preview gallery</p>
        </div>
        <button class="btn btn-outline-secondary" type="button" aria-label="Close gallery" @click="emit('closed')">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </header>

      <div class="lightbox-body">
        <img
          class="lightbox-image"
          :src="project.previewImages[activeIndex]?.src"
          :alt="project.previewImages[activeIndex]?.alt"
        >

        <div class="lightbox-thumbs">
          <button
            v-for="(image, index) in project.previewImages"
            :key="image.src"
            class="btn p-0"
            :class="{ active: activeIndex === index }"
            type="button"
            :aria-label="`Show ${image.alt}`"
            @click="activeIndex = index"
          >
            <img :src="image.src" :alt="image.alt" loading="lazy">
          </button>
        </div>
      </div>

      <footer class="lightbox-footer">
        <a class="btn btn-primary" :href="project.appLink" target="_blank" rel="noopener noreferrer">
          <i class="fa-solid fa-up-right-from-square me-1"></i>Open App
        </a>
        <button class="btn btn-outline-secondary" type="button" @click="emit('closed')">Close</button>
      </footer>
    </section>
  </div>
</template>
