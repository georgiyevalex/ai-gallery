<script setup lang="ts">
interface Props {
  as?: 'button' | 'a' | 'NuxtLink'
  to?: string
  href?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
  type: 'button',
  disabled: false,
  loading: false,
})

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

function handleClick(e: MouseEvent) {
  if (props.disabled || props.loading) return
  emit('click', e)
}
</script>

<template>
  <component
      :is="as"
      :to="to"
      :href="href"
      :type="as === 'button' ? type : undefined"
      :disabled="as === 'button' ? disabled : undefined"
      :class="loading ? 'pointer-events-none': 'cursor-pointer'"
      class="inline-flex items-center justify-center gap-1 transition disabled:opacity-50 disabled:pointer-events-none rounded-4xl p-2 text-xs/4"
      @click="handleClick"
  >

    <tabler-icon
      v-if="loading"
      name="IconInnerShadowBottomLeft"
      class="animate-spin"
    />

    <template v-else>
      <slot name="left" />

      <slot name="right" />
    </template>

    <slot />
  </component>
</template>