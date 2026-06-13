<script setup lang="ts">
const data = useProfileData()
const featuredExperience = computed(() => data.experience.slice(0, 3))
const featuredProjects = computed(() => data.professionalProjects.slice(0, 3))
const highlightIcons = ['fa-solid fa-code-branch', 'fa-solid fa-diagram-project', 'fa-solid fa-layer-group']
const quickFactIcons = ['fa-solid fa-bullseye', 'fa-solid fa-code', 'fa-solid fa-database', 'fa-solid fa-rocket']
const activeProject = ref<any | null>(null)

useSeoMeta({
  title: `${data.identity.name} - ${data.identity.role}`,
  description: data.identity.headline
})
</script>

<template>
  <div>
    <section class="hero-section">
      <div class="container py-5">
        <div class="row align-items-center g-4 g-xl-5 py-lg-4">
          <div class="col-lg-7 hero-copy">
            <div class="d-flex flex-wrap gap-2 mb-3">
              <span class="badge soft-badge">
                <i class="fa-solid fa-laptop-code me-1"></i>{{ data.identity.role }}
              </span>
              <span class="badge soft-badge">
                <i class="fa-solid fa-location-dot me-1"></i>{{ data.identity.currentBase }}
              </span>
            </div>
            <h1 class="hero-title fw-bold mb-3">{{ data.identity.name }}</h1>
            <p class="hero-lead mb-4">{{ data.identity.headline }}</p>
            <div class="hero-summary">
              <p v-for="paragraph in data.identity.summary.slice(0, 2)" :key="paragraph">
                {{ paragraph }}
              </p>
            </div>

            <div class="hero-actions d-flex flex-wrap gap-2 mt-4">
              <NuxtLink class="btn btn-primary btn-lg" to="/projects">
                <i class="fa-solid fa-layer-group me-1"></i>View Projects
              </NuxtLink>
              <NuxtLink class="btn btn-outline-primary btn-lg" to="/contact">
                <i class="fa-solid fa-paper-plane me-1"></i>Contact
              </NuxtLink>
            </div>
          </div>

          <div class="col-lg-5">
            <div class="hero-profile-panel profile-card profile-card-featured">
              <div class="hero-profile-top">
                <div class="hero-portrait">
                  <img src="/profile/akbar-portrait.svg" alt="Akbar Bintang Mahendra portrait illustration">
                </div>
                <div>
                  <p class="text-uppercase text-primary fw-semibold small mb-2">Available profile</p>
                  <h2 class="h4 mb-2">{{ data.identity.role }}</h2>
                  <p class="text-body-secondary mb-0">{{ data.identity.currentBase }}</p>
                </div>
              </div>

              <div class="hero-profile-divider"></div>

              <div class="d-flex align-items-center gap-3 mb-3">
                <i class="fa-solid fa-id-card section-icon"></i>
                <h2 class="h5 mb-0">Profile Snapshot</h2>
              </div>
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

    <section class="container py-5">
      <div class="row row-cols-1 row-cols-md-3 g-3">
        <div v-for="(highlight, index) in data.highlights" :key="highlight.label" class="col">
          <div class="card h-100 metric-card profile-card">
            <div class="card-body p-4">
              <div class="d-flex align-items-center gap-3 mb-3">
                <i :class="highlightIcons[index]" class="section-icon"></i>
                <p class="metric-value fw-semibold mb-0">{{ highlight.value }}</p>
              </div>
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
        <div v-for="(fact, index) in data.identity.quickFacts" :key="fact.label" class="col">
          <div class="card h-100 profile-card">
            <div class="card-body">
              <h2 class="h5 card-title">
                <i :class="quickFactIcons[index]" class="text-primary me-2"></i>{{ fact.label }}
              </h2>
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
        <NuxtLink class="btn btn-outline-primary align-self-md-center" to="/experience">
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
        <NuxtLink class="btn btn-outline-primary align-self-md-center" to="/projects">
          View All Projects
        </NuxtLink>
      </div>

      <div class="row row-cols-1 row-cols-lg-3 g-3">
        <div v-for="project in featuredProjects" :key="project.name" class="col">
          <ProjectCard :project="project" @open-gallery="activeProject = $event" />
        </div>
      </div>
    </section>

    <ProjectGalleryModal :project="activeProject" @closed="activeProject = null" />
  </div>
</template>
