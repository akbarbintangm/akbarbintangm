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

const contactIcon = (label: string) => {
  const key = label.toLowerCase()

  if (key.includes('whatsapp')) {
    return 'fa-brands fa-whatsapp'
  }

  if (key.includes('github')) {
    return 'fa-brands fa-github'
  }

  if (key.includes('linkedin')) {
    return 'fa-brands fa-linkedin'
  }

  return 'fa-solid fa-envelope'
}

useSeoMeta({
  title: `Contact - ${data.identity.name}`,
  description: `Contact information for ${data.identity.name}.`
})
</script>

<template>
  <div class="container py-5">
    <div class="row g-4 align-items-start">
      <div class="col-lg-5">
        <SectionHeader
          eyebrow="Contact"
          title="Get In Touch"
          description="For professional opportunities, project discussions, or engineering collaboration."
        />

        <div class="card profile-card contact-hero-card mb-3">
          <div class="card-body p-4">
            <h2 class="h4 mb-3">Let's talk about the right engineering role.</h2>
            <p class="text-body-secondary mb-4">
              I am open to backend, frontend, or full-stack work where system reliability, clean API contracts, and maintainable UI matter.
            </p>
            <div class="d-grid gap-2">
              <a class="btn btn-primary" :href="data.identity.chat.whatsapp.href" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-whatsapp me-2"></i>Chat on WhatsApp
              </a>
              <a class="btn btn-outline-primary" :href="`mailto:${data.identity.email}`">
                <i class="fa-solid fa-envelope me-2"></i>Send Email
              </a>
            </div>
          </div>
        </div>

        <div class="card profile-card">
          <div class="card-body">
            <h2 class="h5 card-title">
              <i class="fa-solid fa-briefcase text-primary me-2"></i>Availability Notes
            </h2>
            <KeyValueList :items="availability" />
          </div>
        </div>
      </div>

      <div class="col-lg-7">
        <div class="row row-cols-1 row-cols-md-2 g-3">
          <div v-for="contact in data.identity.contacts" :key="contact.label" class="col">
            <div class="card h-100 profile-card contact-method-card">
              <div class="card-body">
                <h2 class="h5 card-title">
                  <i :class="contactIcon(contact.label)" class="text-primary me-2"></i>{{ contact.label }}
                </h2>
                <p class="text-body-secondary">{{ contact.value }}</p>
                <a
                  class="btn btn-outline-primary btn-sm"
                  :href="contact.href"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa-solid fa-arrow-up-right-from-square me-1"></i>Open {{ contact.label }}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="card mt-3 profile-card">
          <div class="card-body">
            <h2 class="h5 card-title">
              <i class="fa-solid fa-user-tie text-primary me-2"></i>Short Summary
            </h2>
            <p v-for="paragraph in data.identity.summary" :key="paragraph">
              {{ paragraph }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
