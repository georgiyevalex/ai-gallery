<template>
  <div class="max-w-screen h-screen overflow-x-hidden bg-primary">
    <app-header />

    <div class="max-w-[1920px] h-[calc(100vh-52px)] m-auto flex bg-secondary">
      <app-menu />

      <div class="w-full overflow-y-auto scrollbar">
        <slot></slot>
      </div>
    </div>
  </div>
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