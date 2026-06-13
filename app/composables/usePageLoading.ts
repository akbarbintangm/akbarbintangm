export const usePageLoading = () => {
  const isPageLoading = useState<boolean>('page-loading', () => true)

  const startLoading = () => {
    isPageLoading.value = true
  }

  const finishLoading = () => {
    isPageLoading.value = false
  }

  return {
    isPageLoading,
    startLoading,
    finishLoading
  }
}
