<template>
  <div
      class="relative group overflow-hidden rounded-lg"
  >
    <video
        v-if="item.preview_video"
        :src="item.preview_video"
        class="w-full h-full object-cover"
        autoplay
        muted
        loop
        playsinline
    />
    <img
        v-else
        :src="item.preview"
        class="w-full h-full object-cover"
    />

    <div
        class="absolute inset-0 flex flex-col justify-between p-3
             bg-black/20 opacity-0 group-hover:opacity-100
             transition duration-300"
    >

      <div class="flex">
        <ui-button
            class="bg-interactive-dark-gray backdrop-blur-2xl rounded-lg p-2 text-white hover:bg-secondary/70 transition"
        >
          <tabler-icon name="IconHeart" />
        </ui-button>
      </div>

      <div
          class="text-white"
      >
        <div class="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />

        <div class="relative flex justify-between">

          <div class="flex gap-1 items-center">
            <img :src="item?.user?.image ?? '/images/avatar-small.svg'" width="20" height="20" class="rounded-full" />
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

<script setup>
defineProps({
  item: {
    type: Object,
    default: () => ({})
  }
})
</script>