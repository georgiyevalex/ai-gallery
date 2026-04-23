<template>
  <aside class="w-64 h-full flex flex-col justify-between p-3">
    <div>
      <div class="pt-0 pb-1 p-1.5">
        <ui-button
            class="w-full justify-center bg-interactive-secondary text-text-primary hover:bg-interactive-primary hover:text-inverted-primary rounded-lg"
        >
          <template #left>
            <tabler-icon name="IconPlus" />
          </template>
          Добавить
        </ui-button>
      </div>

      <div class="mx-1.5 my-2 bg-interactive-secondary h-px">

      </div>

      <nav class="pt-2 flex flex-col gap-1">
        <sidebar-item label="Все генерации" to="/">
          <template #icon>
            <tabler-icon name="IconLayoutGrid" />
          </template>
        </sidebar-item>
        <sidebar-item icon="IconPhoto" label="Изображения" to="/images" >
          <template #icon>
            <tabler-icon name="IconPhoto" />
          </template>
        </sidebar-item>
        <sidebar-item icon="IconVideo" label="Видео" to="/video" >
          <template #icon>
            <tabler-icon name="IconMovie" />
          </template>
        </sidebar-item>
      </nav>
    </div>

    <div>
      <sidebar-item label="Мой профиль">
        <template #icon>
          <img src="/images/avatar-small.svg" alt="Profile" width="18">
        </template>
      </sidebar-item>
    </div>

  </aside>
</template>

<script setup>
</script>