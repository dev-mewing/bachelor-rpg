<script setup>
  import Menu from '@/components/ui/Menu.vue';
  import { ref } from 'vue';

  const isOpen = ref(false);

  function closeMenu() {
    isOpen.value = false;
  }


</script>
<template>
  <div class="container menu-container">
    <img src="@/assets/images/brand/brpg-logo.svg" alt="Bachelor RPG Logo" width="45" />
    <button @click="isOpen = !isOpen">
      <span class="fa fa-bars" title="Open menu"></span>
    </button>
    <Menu :isOpen="isOpen" @close="closeMenu"/>
  </div>
</template>

<style scoped>
  .menu-container {
    display: flex;
    justify-content: space-between;
  }
</style>