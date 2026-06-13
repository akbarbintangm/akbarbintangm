export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter()
  const { startLoading, finishLoading } = usePageLoading()
  let loadingTimer: ReturnType<typeof window.setTimeout> | undefined

  const finishWithMinimumDelay = () => {
    if (loadingTimer) {
      window.clearTimeout(loadingTimer)
    }

    loadingTimer = window.setTimeout(() => {
      finishLoading()
    }, 250)
  }

  router.beforeEach((to, from) => {
    if (to.fullPath !== from.fullPath) {
      startLoading()
    }
  })

  router.afterEach(() => {
    finishWithMinimumDelay()
  })

  nuxtApp.hook('page:finish', () => {
    finishWithMinimumDelay()
  })

  window.requestAnimationFrame(() => {
    finishWithMinimumDelay()
  })
})
