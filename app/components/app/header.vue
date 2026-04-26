<template>
  <header class="inset-x-0 top-0 z-10">
    <div class="flex h-[52px] items-center justify-between gap-8 px-4 max-w-[1920px] m-auto">
      <div class="cursor-pointer" @click="navigateTo('/')">
        <img src="/images/logo.svg" :alt="$t('alts.logo')" width="30">
      </div>

      <div class="flex gap-3.5">
        <ui-button class="bg-interactive-secondary text-text-primary hover:bg-interactive-primary hover:text-inverted-primary px-2.5">
          <template #left>
            <tabler-icon name="IconSparkles2Filled" />
          </template>
          {{ $t("buttons.getTokens") }}
        </ui-button>

        <ui-button class="hover:bg-interactive-secondary hover:text-text-primary bg-interactive-primary text-inverted-primary px-2.5">
          {{ $t("buttons.tariffs") }}
        </ui-button>

        <div class="cursor-pointer">
          <img src="/images/avatar.svg" :alt="$t('alts.avatar')" width="32">
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>

</style>