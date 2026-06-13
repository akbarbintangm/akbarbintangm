type ProfileTheme = 'light' | 'dark'

const isProfileTheme = (value: string | null): value is ProfileTheme =>
  value === 'light' || value === 'dark'

export const useProfileTheme = () => {
  const theme = useState<ProfileTheme>('profile-theme', () => 'light')

  const applyTheme = (value: ProfileTheme) => {
    theme.value = value

    if (!import.meta.client) {
      return
    }

    document.documentElement.setAttribute('data-bs-theme', value)
    window.localStorage.setItem('profile-theme', value)
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
    applyTheme(theme.value === 'dark' ? 'light' : 'dark')
  }

  return {
    theme,
    applyTheme,
    initTheme,
    toggleTheme
  }
}
