<template>
  <div class="page-wrapper">
    <div class="columns-4 md:columns-5 gap-0.5">
      <div
          v-for="item in items"
          :key="item.id"
          class="mb-0.5 break-inside-avoid"
      >
        <gallery-item :item="item" />
      </div>
    </div>

    <div v-if="loading" class="text-center py-4 text-sm opacity-60">
      Loading...
    </div>

    <client-only>
      <div
          v-if="loadMoreEnabled"
          v-intersection-observer="onIntersectionObserver"
          class="h-10"
      />
    </client-only>
  </div>
</template>

<script lang="ts" setup>
import { vIntersectionObserver } from '@vueuse/components'
const {
  items, loading, loadMoreEnabled,
  fetchItems, onIntersectionObserver
} = usePosts({type: "VIDEO"});

await fetchItems();
</script>
