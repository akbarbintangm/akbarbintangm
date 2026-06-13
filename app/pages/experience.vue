<script setup lang="ts">
const data = useProfileData()

useSeoMeta({
  title: `Experience - ${data.identity.name}`,
  description: 'Work experience and education profile for Akbar Bintang Mahendra.'
})
</script>

<template>
  <div class="container py-5">
    <SectionHeader
      eyebrow="Experience"
      title="Work Experience"
      description="Professional roles, freelance work, and project responsibilities across backend, frontend, integration, and operations."
    />

    <div class="row g-4">
      <div class="col-lg-8">
        <div class="row row-cols-1 g-3">
          <div v-for="item in data.experience" :key="`${item.company}-${item.period}`" class="col">
            <ExperienceItem :item="item" />
          </div>
        </div>
      </div>

      <aside class="col-lg-4">
        <div class="card mb-3">
          <div class="card-body">
            <h2 class="h5 card-title">Education</h2>
            <div v-for="education in data.education" :key="education.school" class="mb-3">
              <p class="fw-semibold mb-1">{{ education.degree }}</p>
              <p class="mb-1">{{ education.school }}</p>
              <p class="text-body-secondary mb-0">
                {{ education.period }} | {{ education.location }}
              </p>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h2 class="h5 card-title">Languages</h2>
            <ul class="list-group list-group-flush">
              <li
                v-for="language in data.languages"
                :key="language.name"
                class="list-group-item px-0 d-flex justify-content-between gap-3"
              >
                <span>{{ language.name }}</span>
                <span class="text-body-secondary text-end">{{ language.level }}</span>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>
