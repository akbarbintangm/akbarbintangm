type ProfileTheme = 'light' | 'dark'

const isProfileTheme = (value: string | null): value is ProfileTheme =>
  value === 'light' || value === 'dark'

export const useProfileTheme = () => {
  const theme = useState<ProfileTheme>('profile-theme', () => 'light')

  const applyTheme = (value: ProfileTheme, animate = false) => {
    theme.value = value

    if (!import.meta.client) {
      return
    }

    const setTheme = () => {
      document.documentElement.setAttribute('data-bs-theme', value)
      window.localStorage.setItem('profile-theme', value)
    }

    if (!animate) {
      setTheme()
      return
    }

    document.documentElement.classList.add('theme-transitioning')
    window.setTimeout(setTheme, 90)
    window.setTimeout(() => {
      document.documentElement.classList.remove('theme-transitioning')
    }, 240)
  }

  const initTheme = () => {
    if (!import.meta.client) {
      return
    }

    const savedTheme = window.localStorage.getItem('profile-theme')
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'

    applyTheme(isProfileTheme(savedTheme) ? savedTheme : systemTheme)
  }

  const toggleTheme = () => {
    applyTheme(theme.value === 'dark' ? 'light' : 'dark', true)
  }

  return {
    theme,
    applyTheme,
    initTheme,
    toggleTheme
  }
}
