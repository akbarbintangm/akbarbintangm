export default defineNuxtPlugin(() => {
  const router = useRouter()
  const navigation = useProfileNavigation()
  let locked = false

  const isBusyOverlayOpen = () =>
    Boolean(document.querySelector('.modal.show, .offcanvas.show, .dropdown-menu.show, .lightbox-backdrop'))

  const goToSiblingPage = async (direction: 1 | -1) => {
    if (locked || isBusyOverlayOpen()) {
      return
    }

    const path = router.currentRoute.value.path
    const index = navigation.findIndex((item) => item.to === path)

    if (index === -1) {
      return
    }

    const nextItem = navigation[index + direction]

    if (!nextItem) {
      return
    }

    locked = true
    await router.push(nextItem.to)
    window.setTimeout(() => {
      window.scrollTo(0, 0)
      locked = false
    }, 450)
  }

  window.addEventListener('contextmenu', (event) => {
    event.preventDefault()
  })

  window.addEventListener(
    'wheel',
    (event) => {
      const scrollingDown = event.deltaY > 0
      const bottomDistance =
        document.documentElement.scrollHeight - window.innerHeight - window.scrollY
      const atBottom = bottomDistance <= 6

      if (scrollingDown && atBottom) {
        event.preventDefault()
        void goToSiblingPage(1)
      }
    },
    { passive: false }
  )
})
