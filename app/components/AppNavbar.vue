<script setup lang="ts">
defineProps<{
  profile: {
    name: string
    role: string
  }
}>()

const navigation = useProfileNavigation()
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom sticky-top shadow-sm">
    <div class="container">
      <button
        class="btn btn-outline-primary me-3"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#profileSidebar"
        aria-controls="profileSidebar"
        aria-label="Open sidebar menu"
      >
        <i class="fa-solid fa-bars"></i>
      </button>

      <NuxtLink class="navbar-brand" to="/">
        <span class="fw-semibold">{{ profile.name }}</span>
        <small class="d-block text-body-secondary">{{ profile.role }}</small>
      </NuxtLink>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#profileNavbar"
        aria-controls="profileNavbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="profileNavbar" class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li v-for="item in navigation" :key="item.to" class="nav-item">
            <NuxtLink class="nav-link" exact-active-class="active" :to="item.to">
              <i :class="item.icon" class="me-1"></i>
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
