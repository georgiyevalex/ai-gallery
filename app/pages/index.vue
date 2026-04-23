<template>
  <div class="columns-4 md:columns-5 gap-0.5 p-0.5">
    <div
        v-for="item in items"
        :key="item.id"
        class="mb-1 break-inside-avoid"
    >
      <gallery-item :item="item" />
    </div>
  </div>

  <!-- sentinel -->
  <div ref="loadMoreTrigger" class="h-10"></div>

  <!-- loader -->
  <div v-if="loading" class="text-center py-4 text-sm opacity-60">
    Loading...
  </div>
</template>

<script>

export default {
  setup() {
    const { items, loading, loadMoreTrigger } = usePosts()

    return {
      loadMoreTrigger,
      items,
      loading
    }
  }
}
</script>

<style lang="scss" scoped>

</style>