<script setup>
  import ToggleMenu from './components/ui/ToggleMenu.vue';
</script>
<template>
  <main id="appVue">
    <ToggleMenu />
    <router-view />
  </main>
</template>
