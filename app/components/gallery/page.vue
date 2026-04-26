<template>
  <div class="page-wrapper">
    <div class="flex gap-0.5">
      <div
          v-for="(col, i) in columns"
          :key="i"
          class="flex-1"
      >
        <div
            v-for="item in col"
            :key="item.id"
            class="mb-0.5"
        >
          <slot name="item" :item="item">
            <gallery-item :item="item" />
          </slot>
        </div>
      </div>
    </div>
    
    <client-only>
      <div ref="observeElement" class="h-10" />
    </client-only>
  </div>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from "@vueuse/core"

const props = withDefaults(defineProps<{
  type?: string | undefined
  columnsCount?: number
}>(), {
  type: undefined,
  columnsCount: 5,
})

const { items, loading, fetchItems } = usePosts({
  type: props.type,
})

await fetchItems()

const { columns } = useMasonry(
    items,
    props.columnsCount
)

const scrollContainer = inject<Ref<HTMLElement | null>>("scrollContainer")

const observeElement = ref<HTMLElement | null>(null)

onMounted(() => {
  useIntersectionObserver(
      observeElement,
      ([entry]) => {
        if (entry.isIntersecting && !loading.value) {
          fetchItems()
        }
      },
      {
        root: scrollContainer,
        rootMargin: "0px 0px 1500px 0px",
        threshold: 0
      }
  )
})

useScrollMemory(scrollContainer, {
  resetOnRouteChange: false,
})
</script>