import { ref, onMounted, onBeforeUnmount } from 'vue'

export const usePosts = (options = {}) => {
  const { type = null } = options

  const { $api } = useNuxtApp()

  const items = ref([])
  const page = ref(1)
  const totalPages = ref(1)
  const loading = ref(false)

  const loadMoreTrigger = ref(null)
  let observer = null

  const fetchItems = async () => {
    if (loading.value) return
    if (page.value > totalPages.value) return

    loading.value = true

    try {
      const response = await $api('/v1/community/posts', {
        params: {
          page: page.value,
          ...(type ? { type__in: type } : {})
        }
      })

      items.value.push(...response.items)
      totalPages.value = response.pages
      page.value++
    } finally {
      loading.value = false
    }
  }

  const initObserver = () => {
    observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            fetchItems()
          }
        },
        { rootMargin: '200px' }
    )

    if (loadMoreTrigger.value) {
      observer.observe(loadMoreTrigger.value)
    }
  }

  onMounted(() => {
    fetchItems()
    initObserver()
  })

  onBeforeUnmount(() => {
    if (observer && loadMoreTrigger.value) {
      observer.unobserve(loadMoreTrigger.value)
    }
  })

  return {
    items,
    loading,
    loadMoreTrigger
  }
}