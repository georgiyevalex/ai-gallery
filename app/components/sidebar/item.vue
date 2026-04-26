<template>
  <NuxtLink
      :to="to"
      class="flex items-center gap-1.5 py-1 transition"
      :class="isActive
      ? 'text-text-primary'
      : 'text-text-secondary hover:text-text-primary'"
  >
    <slot name="icon" />
    <span class="text-xs">{{ label }}</span>
  </NuxtLink>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  icon: String,
  label: String,
  to: String
})

const route = useRoute()

const isActive = computed(() => {
  return route.path === props.to
})
</script>