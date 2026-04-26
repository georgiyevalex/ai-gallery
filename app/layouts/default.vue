<template>
  <div class="max-w-screen h-screen overflow-x-hidden bg-primary">
    <app-header />

    <div class="max-w-[1920px] m-auto p-1 pb-0">
      <div class="flex bg-secondary h-[calc(100vh-52px-4px)] rounded-sm">
        <app-menu />
        
        <div ref="scrollContainer" class="w-full overflow-y-auto scrollbar">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const scrollContainer = ref<HTMLElement | null>(null)
  
  provide<Ref<HTMLElement | null>>("scrollContainer", scrollContainer)
</script>

<style lang="scss" scoped>

</style>