<script setup lang="ts">
defineProps<{
  profile: {
    name: string
    role: string
    headline: string
    location: string
  }
  contacts: Array<{
    label: string
    value: string
    href: string
  }>
}>()

const navigation = useProfileNavigation()
</script>

<template>
  <aside
    id="profileSidebar"
    class="offcanvas offcanvas-start"
    tabindex="-1"
    aria-labelledby="profileSidebarLabel"
  >
    <div class="offcanvas-header border-bottom">
      <div>
        <h2 id="profileSidebarLabel" class="h5 offcanvas-title">{{ profile.name }}</h2>
        <p class="mb-0 text-body-secondary">{{ profile.role }}</p>
      </div>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>

    <div class="offcanvas-body">
      <div class="card mb-3">
        <div class="card-body">
          <p class="mb-2">{{ profile.headline }}</p>
          <p class="mb-0 text-body-secondary">
            <i class="fa-solid fa-location-dot me-2 text-primary"></i>{{ profile.location }}
          </p>
        </div>
      </div>

      <div class="list-group mb-4">
        <NuxtLink
          v-for="item in navigation"
          :key="item.to"
          class="list-group-item list-group-item-action d-flex align-items-center gap-3"
          active-class="active"
          :to="item.to"
          data-bs-dismiss="offcanvas"
        >
          <i :class="item.icon" class="text-primary"></i>
          <span>{{ item.label }}</span>
        </NuxtLink>
      </div>

      <h3 class="h6 text-uppercase text-body-secondary">Quick Contact</h3>
      <div class="d-grid gap-2">
        <a
          v-for="contact in contacts.slice(0, 4)"
          :key="contact.label"
          class="btn btn-outline-secondary text-start"
          :href="contact.href"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-solid fa-arrow-up-right-from-square me-2"></i>{{ contact.label }}
        </a>
      </div>
    </div>
  </aside>
</template>
