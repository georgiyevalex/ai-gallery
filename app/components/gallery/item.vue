<template>
  <div
      ref="card"
      class="relative group overflow-hidden rounded-xs"
      @mouseenter="onHoverStart"
      @mouseleave="onHoverEnd"
  >
    <video
        ref="videoRef"
        v-if="item.preview_video && shouldRenderVideo"
        :src="item.preview_video"
        class="w-full h-full object-cover transition-opacity duration-200"
        autoplay
        muted
        loop
        playsinline
        @canplay="onVideoReady"
        :class="isHovered && isVideoLoaded || isVideoPaused ? 'opacity-100' : 'opacity-0 absolute inset-0'"
    />
    
    <img
        v-if="!isVideoPaused"
        v-show="!isHovered || !isVideoLoaded"
        :src="item.preview"
        class="w-full h-full object-cover"
    />
    
    <div
        v-if="item.preview_video"
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
            class="bg-interactive-dark-gray backdrop-blur-2xl rounded-lg p-2 text-white hover:bg-secondary/70 transition"
        >
          <tabler-icon name="IconHeart" />
        </ui-button>
      </div>
      
      <div class="text-white">
        <div class="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
        
        <div class="relative flex justify-between">
          <div class="flex gap-1 items-center">
            <img
                :src="item?.user?.image ?? '/images/avatar-small.svg'"
                width="20"
                height="20"
                class="rounded-full"
            />
            <div class="text-xs font-semibold overflow-hidden text-ellipsis max-w-32">
              {{ item?.user?.display_name }}
            </div>
          </div>
          
          <div class="flex items-center gap-3 text-xs opacity-80 mt-1">
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

<script lang="ts" setup>
import { ref } from 'vue'
import { useElementHover } from '@vueuse/core'

defineProps({
  item: {
    type: Object,
    default: () => ({})
  }
})

const card = useTemplateRef('card')
const isHovered = useElementHover(card)

const videoRef = ref<HTMLVideoElement | null>(null)
const isVideoLoaded = ref(false)
const isVideoPaused = ref(false)
const shouldRenderVideo = ref(false)

const onHoverStart = () => {
  if (!shouldRenderVideo.value) {
    shouldRenderVideo.value = true
  }
  
  if (videoRef.value && isVideoLoaded.value) {
    videoRef.value.play()
  }
}

const onVideoReady = () => {
  isVideoLoaded.value = true
  
  if (videoRef.value) {
    videoRef.value.play()
  }
  
  isVideoPaused.value = false
}

const onHoverEnd = () => {
  if (videoRef.value) {
    videoRef.value.pause()
    isVideoPaused.value = true
  }
}
</script>