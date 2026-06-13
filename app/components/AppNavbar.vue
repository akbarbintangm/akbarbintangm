<script setup lang="ts">
defineProps<{
  profile: {
    name: string
    role: string
  }
}>()

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Experience', to: '/experience' },
  { label: 'Projects', to: '/projects' },
  { label: 'Skills', to: '/skills' },
  { label: 'Contact', to: '/contact' }
]

const { theme, toggleTheme } = useProfileTheme()
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom sticky-top">
    <div class="container">
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
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>

        <div class="form-check form-switch ms-lg-3">
          <input
            id="themeSwitch"
            class="form-check-input"
            type="checkbox"
            role="switch"
            :checked="theme === 'dark'"
            aria-label="Toggle dark theme"
            @change="toggleTheme"
          >
          <label class="form-check-label" for="themeSwitch">Dark</label>
        </div>
      </div>
    </div>
  </nav>
</template>
