<template>
  <header class="inset-x-0 top-0 z-10">
    <div class="flex h-[52px] items-center justify-between gap-8 px-4 max-w-[1920px] m-auto">
      <div class="cursor-pointer" @click="navigateTo('/')">
        <img src="/images/logo.svg" alt="logo" width="30">
      </div>

      <div class="flex gap-2">
        <ui-button class="bg-interactive-secondary text-text-primary hover:bg-interactive-primary hover:text-inverted-primary">
          <template #left>
            <tabler-icon name="IconSparkles2Filled" />
          </template>
            Получить токены
        </ui-button>

        <ui-button class="hover:bg-interactive-secondary hover:text-text-primary bg-interactive-primary text-inverted-primary">
          Тарифы
        </ui-button>

        <div class="cursor-pointer">
          <img src="/images/avatar.svg" alt="Avatar" width="32">
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  setup() {


    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>