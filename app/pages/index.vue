<script setup lang="ts">
const data = useProfileData()
const featuredExperience = computed(() => data.experience.slice(0, 3))
const featuredProjects = computed(() => data.professionalProjects.slice(0, 3))

useSeoMeta({
  title: `${data.identity.name} - ${data.identity.role}`,
  description: data.identity.headline
})
</script>

<template>
  <div>
    <section class="container py-5">
      <div class="row align-items-center g-4">
        <div class="col-lg-8">
          <p class="text-uppercase text-primary fw-semibold small mb-2">{{ data.identity.role }}</p>
          <h1 class="display-5 fw-bold mb-3">{{ data.identity.name }}</h1>
          <p class="lead text-body-secondary">{{ data.identity.headline }}</p>
          <p v-for="paragraph in data.identity.summary.slice(0, 2)" :key="paragraph">
            {{ paragraph }}
          </p>

          <div class="d-flex flex-wrap gap-2 mt-4">
            <NuxtLink class="btn btn-primary" to="/projects">View Projects</NuxtLink>
            <NuxtLink class="btn btn-outline-primary" to="/contact">Contact</NuxtLink>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="card">
            <div class="card-body">
              <h2 class="h5 card-title">Profile Snapshot</h2>
              <KeyValueList
                :items="[
                  { label: 'Location', value: data.identity.location },
                  { label: 'Current base', value: data.identity.currentBase },
                  { label: 'Email', value: data.identity.email },
                  { label: 'Phone', value: data.identity.phone }
                ]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container pb-5">
      <div class="row row-cols-1 row-cols-md-3 g-3">
        <div v-for="highlight in data.highlights" :key="highlight.label" class="col">
          <div class="card h-100">
            <div class="card-body">
              <p class="display-6 fw-semibold mb-1">{{ highlight.value }}</p>
              <p class="text-body-secondary mb-0">{{ highlight.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container pb-5">
      <SectionHeader
        eyebrow="Focus"
        title="What I Usually Build"
        description="Enterprise systems, internal tools, API-first platforms, and practical interfaces for real business workflows."
      />

      <div class="row row-cols-1 row-cols-lg-2 g-3">
        <div v-for="fact in data.identity.quickFacts" :key="fact.label" class="col">
          <div class="card h-100">
            <div class="card-body">
              <h2 class="h5 card-title">{{ fact.label }}</h2>
              <p class="mb-0">{{ fact.value }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container pb-5">
      <div class="d-flex flex-column flex-md-row justify-content-between gap-3 mb-4">
        <SectionHeader
          class="mb-0"
          eyebrow="Experience"
          title="Recent Roles"
          description="A quick look at the latest professional work."
        />
        <NuxtLink class="btn btn-outline-secondary align-self-md-center" to="/experience">
          View All Experience
        </NuxtLink>
      </div>

      <div class="row row-cols-1 g-3">
        <div v-for="item in featuredExperience" :key="`${item.company}-${item.period}`" class="col">
          <ExperienceItem :item="item" />
        </div>
      </div>
    </section>

    <section class="container pb-5">
      <div class="d-flex flex-column flex-md-row justify-content-between gap-3 mb-4">
        <SectionHeader
          class="mb-0"
          eyebrow="Projects"
          title="Selected Professional Work"
          description="Representative systems from enterprise, HR, hospitality, finance, and operations."
        />
        <NuxtLink class="btn btn-outline-secondary align-self-md-center" to="/projects">
          View All Projects
        </NuxtLink>
      </div>

      <div class="row row-cols-1 row-cols-lg-3 g-3">
        <div v-for="project in featuredProjects" :key="project.name" class="col">
          <ProjectCard :project="project" />
        </div>
      </div>
    </section>
  </div>
</template>
