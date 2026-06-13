export default defineNuxtPlugin(() => {
  const { initTheme } = useProfileTheme()

  initTheme()
})
