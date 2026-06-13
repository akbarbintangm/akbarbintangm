<script setup lang="ts">
const data = useProfileData()

useSeoMeta({
  title: `Skills - ${data.identity.name}`,
  description: 'Technical skills for backend, frontend, databases, infrastructure, and integrations.'
})
</script>

<template>
  <div class="container py-5">
    <SectionHeader
      eyebrow="Skills"
      title="Technical Skills"
      description="A practical stack shaped by enterprise systems, API design, integrations, databases, and operational delivery."
    />

    <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3 mb-5">
      <div v-for="group in data.skills" :key="group.category" class="col">
        <SkillGroup :group="group" />
      </div>
    </div>

    <SectionHeader
      eyebrow="Working Style"
      title="How I Approach Systems"
      description="I like codebases that are clear to maintain, stable to operate, and realistic for teams to extend."
    />

    <div class="row row-cols-1 row-cols-lg-2 g-3">
      <div class="col">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h2 class="h5 card-title">
              <i class="fa-solid fa-plug text-primary me-2"></i>Backend and Integration
            </h2>
            <p class="mb-0">
              API contracts, business logic, database design, integration points, and documentation need to be understandable before they become large.
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h2 class="h5 card-title">
              <i class="fa-solid fa-window-maximize text-primary me-2"></i>Frontend Delivery
            </h2>
            <p class="mb-0">
              Interfaces should stay responsive, consistent, and useful for the people who work with them every day.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
