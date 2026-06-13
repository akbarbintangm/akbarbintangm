<script setup lang="ts">
const data = useProfileData()

const availability = [
  {
    label: 'Role interest',
    value: 'Backend Engineer, Frontend Engineer, or Full Stack Developer'
  },
  {
    label: 'Best fit',
    value: 'Scalable production systems, enterprise apps, internal tools, and integrations'
  },
  {
    label: 'Working base',
    value: data.identity.currentBase
  }
]

useSeoMeta({
  title: `Contact - ${data.identity.name}`,
  description: `Contact information for ${data.identity.name}.`
})
</script>

<template>
  <div class="container py-5">
    <div class="row g-4">
      <div class="col-lg-7">
        <SectionHeader
          eyebrow="Contact"
          title="Get In Touch"
          description="For professional opportunities, project discussions, or engineering collaboration."
        />

        <div class="row row-cols-1 row-cols-md-2 g-3">
          <div v-for="contact in data.identity.contacts" :key="contact.label" class="col">
            <div class="card h-100">
              <div class="card-body">
                <h2 class="h5 card-title">{{ contact.label }}</h2>
                <p class="text-body-secondary">{{ contact.value }}</p>
                <a
                  class="btn btn-outline-primary btn-sm"
                  :href="contact.href"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open {{ contact.label }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <aside class="col-lg-5">
        <div class="card">
          <div class="card-body">
            <h2 class="h5 card-title">Availability Notes</h2>
            <KeyValueList :items="availability" />
          </div>
        </div>

        <div class="card mt-3">
          <div class="card-body">
            <h2 class="h5 card-title">Short Summary</h2>
            <p v-for="paragraph in data.identity.summary" :key="paragraph">
              {{ paragraph }}
            </p>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>
