<template>
  <aside class="w-64 h-full flex flex-col justify-between p-3.5">
    <div>
      <div class="">
        <ui-button
            class="w-full justify-center bg-interactive-secondary text-text-primary hover:bg-interactive-primary hover:text-inverted-primary rounded-lg"
        >
          <template #left>
            <tabler-icon name="IconPlus" />
          </template>
          {{ $t("buttons.add") }}
        </ui-button>
      </div>

      <div class="my-2.5 bg-white/5 h-px">

      </div>

      <nav class="flex flex-col gap-1 pt-0.5">
        <sidebar-item :label="$t('menu.all')" to="/">
          <template #icon>
            <tabler-icon name="IconLayoutGrid" />
          </template>
        </sidebar-item>
        <sidebar-item icon="IconPhoto" :label="$t('menu.images')" to="/images/" >
          <template #icon>
            <tabler-icon name="IconPhoto" />
          </template>
        </sidebar-item>
        <sidebar-item icon="IconVideo" :label="$t('menu.video')" to="/video/" >
          <template #icon>
            <tabler-icon name="IconMovie" />
          </template>
        </sidebar-item>
      </nav>
    </div>

    <div>
      <sidebar-item :label="$t('menu.profile')">
        <template #icon>
          <img src="/images/avatar-small.svg" :alt="$t('alts.avatar')" width="18">
        </template>
      </sidebar-item>
    </div>

  </aside>
</template>

<script setup lang="ts">
</script>