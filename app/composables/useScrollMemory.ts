import { onMounted, onBeforeUnmount, watch, nextTick } from "vue"
import type { Ref } from "vue"
import { useRoute } from "vue-router"

type Options = {
  key?: string
  resetOnRouteChange?: boolean
}

const scrollMemory = new Map<string, number>()

export function useScrollMemory(
  el: Ref<HTMLElement | null>,
  options: Options = {}
) {
  const route = useRoute()

  const storageKey = options.key ?? `scroll:${route.path}`

  const saveScroll = () => {
    if (!el.value) return
    scrollMemory.set(storageKey, el.value.scrollTop)
  }

  const restoreScroll = async () => {
    if (!el.value) return

    await nextTick()

    const saved = scrollMemory.get(storageKey)

    if (options.resetOnRouteChange || saved == null) {
      el.value.scrollTop = 0
      return
    }

    el.value.scrollTop = saved
  }

  const onScroll = () => {
    saveScroll()
  }

  onMounted(() => {
    el.value?.addEventListener("scroll", onScroll)
    restoreScroll()
  })

  onBeforeUnmount(() => {
    el.value?.removeEventListener("scroll", onScroll)
  })

  watch(
    () => route.fullPath,
    async () => {
      await restoreScroll()
    }
  )
}