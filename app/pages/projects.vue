<script setup lang="ts">
const data = useProfileData()

useSeoMeta({
  title: `Projects - ${data.identity.name}`,
  description: 'Professional and independent software projects by Akbar Bintang Mahendra.'
})
</script>

<template>
  <div class="container py-5">
    <SectionHeader
      eyebrow="Projects"
      title="Professional Projects"
      description="Systems built and maintained for enterprise, government, hospitality, HR, production, CMS, and logistics workflows."
    />

    <div class="row row-cols-1 row-cols-lg-2 g-3 mb-5">
      <div v-for="project in data.professionalProjects" :key="project.name" class="col">
        <ProjectCard :project="project" />
      </div>
    </div>

    <SectionHeader
      eyebrow="Independent"
      title="Independent Experimental Projects"
      description="Self-driven rebuild and architecture experiments focused on scalable backend systems, message brokers, search, and modern frontends."
    />

    <div class="row row-cols-1 row-cols-lg-2 g-3">
      <div v-for="project in data.independentProjects" :key="project.name" class="col">
        <ProjectCard :project="project" />
      </div>
    </div>
  </div>
</template>
