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
const router = useRouter()
const route = useRoute()

const closeSidebar = () => {
  const closeButton = document.querySelector<HTMLButtonElement>('#profileSidebar .btn-close')
  closeButton?.click()
}

const navigateTo = async (to: string) => {
  await router.push(to)
  closeSidebar()
}
</script>

<template>
  <aside
    id="profileSidebar"
    class="offcanvas offcanvas-start profile-sidebar"
    tabindex="-1"
    aria-labelledby="profileSidebarLabel"
  >
    <div class="offcanvas-header">
      <div class="d-flex align-items-center gap-3">
        <div class="sidebar-avatar">AB</div>
        <div>
          <h2 id="profileSidebarLabel" class="h5 offcanvas-title">{{ profile.name }}</h2>
          <p class="mb-0 opacity-75">{{ profile.role }}</p>
        </div>
      </div>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>

    <div class="offcanvas-body p-4">
      <div class="sidebar-summary p-3 mb-3">
        <p class="mb-3">{{ profile.headline }}</p>
        <p class="mb-0 text-body-secondary">
          <i class="fa-solid fa-location-dot me-2 text-primary"></i>{{ profile.location }}
        </p>
      </div>

      <div class="sidebar-nav mb-4">
        <button
          v-for="item in navigation"
          :key="item.to"
          class="sidebar-link"
          :class="{ active: route.path === item.to }"
          type="button"
          @click="navigateTo(item.to)"
        >
          <i :class="item.icon"></i>
          <span>{{ item.label }}</span>
        </button>
      </div>

      <h3 class="h6 text-uppercase text-body-secondary">Quick Contact</h3>
      <div class="d-grid gap-2">
        <a
          v-for="contact in contacts.slice(0, 4)"
          :key="contact.label"
          class="btn btn-outline-secondary contact-link text-start"
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
