<template>
  <div
      ref="card"
      class="relative group overflow-hidden rounded-xs"
      :class="!isLoaded ? 'min-h-[300px]' : ''"
  >
    <div
        v-if="!isLoaded"
        class="absolute inset-0 animate-pulse bg-gradient-to-br from-interactive-secondary  via-interactive-dark-gray to-interactive-secondary"
    />
    
    <img
        :src="item.preview"
        :alt="$t('alts.generation', {u: item?.user?.display_name})"
        loading="lazy"
        decoding="async"
        class="w-full h-full object-cover transition-all duration-500"
        :class="isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'"
        @load="onLoad"
    />
    
    <div
        v-if="item.preview_video && isLoaded"
        class="absolute inset-0 flex flex-col justify-between p-3
      opacity-100 group-hover:opacity-0"
    >
      <div class="flex mt-auto">
        <ui-button
            class="bg-interactive-dark-gray backdrop-blur-2xl rounded-lg p-2 text-white pointer-events-none transition-none"
        >
          <tabler-icon name="IconVideoFilled" />
        </ui-button>
      </div>
    </div>
    
    <div
        class="absolute inset-0 flex flex-col justify-between
      bg-black/20 opacity-0 group-hover:opacity-100 p-3
      transition duration-300"
    >
      <div class="flex">
        <ui-button
            class="bg-interactive-dark-gray backdrop-blur-2xl rounded-lg p-2 text-text-primary hover:bg-secondary/70 transition"
        >
          <tabler-icon name="IconHeart" />
        </ui-button>
      </div>
      
      <div class="text-text-primary">
        <div class="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
        
        <div class="relative flex justify-between">
          <div class="flex gap-1 items-center">
            <img
                :src="item?.user?.image ?? '/images/avatar-small.svg'"
                :alt="$t('alts.avatar')"
                width="20"
                height="20"
                class="rounded-full"
            />
            <div class="text-xs font-semibold overflow-hidden text-ellipsis max-w-32">
              {{ item?.user?.display_name }}
            </div>
          </div>
          
          <div class="flex items-center gap-3 text-sm opacity-80 mt-1">
            <div class="flex items-center gap-1">
              <tabler-icon name="IconEye" class="w-4 h-4" />
              {{ item.views_count }}
            </div>
            
            <div class="flex items-center gap-1">
              <tabler-icon name="IconHeartFilled" class="w-4 h-4" />
              {{ item.likes_count }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['loaded'])

const card = ref()
const isLoaded = ref(false)

const onLoad = () => {
  isLoaded.value = true
  
  emit('loaded', card.value?.offsetHeight)
}

onMounted(() => {
  const img = card.value?.querySelector('img')
  
  if (img?.complete) {
    onLoad()
  }
})
</script>