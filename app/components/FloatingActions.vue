<script setup lang="ts">
const props = defineProps<{
  chat: {
    whatsapp: {
      label: string
      number: string
      href: string
    }
    telegram: {
      label: string
      number: string
      href: string
    }
  }
}>()

const { theme, toggleTheme } = useProfileTheme()
const showScrollTop = ref(false)

const onScroll = () => {
  showScrollTop.value = window.scrollY > 320
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})

const chatItems = computed(() => [
  {
    label: props.chat.whatsapp.label,
    number: props.chat.whatsapp.number,
    href: props.chat.whatsapp.href,
    icon: 'fa-brands fa-whatsapp',
    className: 'text-success'
  },
  {
    label: props.chat.telegram.label,
    number: props.chat.telegram.number,
    href: props.chat.telegram.href,
    icon: 'fa-brands fa-telegram',
    className: 'text-primary'
  }
])
</script>

<template>
  <div class="floating-actions position-fixed d-flex flex-column align-items-end gap-2">
    <button
      v-if="showScrollTop"
      class="btn btn-outline-secondary d-inline-flex align-items-center justify-content-center"
      type="button"
      aria-label="Scroll to top"
      title="Scroll to top"
      @click="scrollToTop"
    >
      <i class="fa-solid fa-arrow-up"></i>
    </button>

    <button
      class="btn btn-primary d-inline-flex align-items-center justify-content-center"
      type="button"
      aria-label="Toggle theme"
      title="Toggle theme"
      @click="toggleTheme"
    >
      <i :class="theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'"></i>
    </button>

    <div class="dropup">
      <button
        class="btn btn-success d-inline-flex align-items-center justify-content-center"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        aria-label="Open chat options"
        title="Chat"
      >
        <i class="fa-solid fa-comments"></i>
      </button>
      <ul class="dropdown-menu dropdown-menu-end shadow">
        <li v-for="item in chatItems" :key="item.label">
          <a
            class="dropdown-item d-flex align-items-center gap-3"
            :href="item.href"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i :class="[item.icon, item.className]"></i>
            <span>
              <span class="d-block">{{ item.label }}</span>
              <small class="text-body-secondary">{{ item.number }}</small>
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
