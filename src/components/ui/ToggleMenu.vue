<script setup>
  import Menu from '@/components/ui/Menu.vue';
  import { usePlayerStore } from '@/stores/player';
  import { ref } from 'vue';

  const playerStore = usePlayerStore();
  
  const loadPlayerData = () => {
    playerStore.loadFromStorage();
  }

  const isOpen = ref(false);

  function closeMenu() {
    isOpen.value = false;
  }


</script>
<template>
  <div class="container menu-container">
    <div class="small-player-info" v-if="playerStore.name">
      Lv. {{ playerStore.level }}
    </div>
    <div class="small-player-info" v-else>
      Lv. 0
    </div>
    <img class="main-logo" src="@/assets/images/brand/bachelor-rpg-logo-trans.png" alt="Bachelor RPG Logo" width="45" />
    <button class="open-btn" type="button" @click="isOpen = !isOpen">
      <span class="fa fa-bars" title="Open menu"></span>
    </button>
    <Menu :isOpen="isOpen" @close="closeMenu" />
  </div>
</template>

<style scoped>
  .main-logo {
    width: 66px;
    justify-self: center
  }
  .menu-container {
    display: grid;
    /* justify-items: center; */
    align-items: center;
    grid-template-columns: 1fr 2fr 1fr;
  }
  .open-btn {
    justify-self: right;
    font-size: 1.8rem;
    background-color: transparent;
    color: maroon;
    border: none;
    margin: 0;
    padding: 0;
    transform: unset;
  }
  .small-player-info {
    color: maroon;
    font-weight: bold;
    font-size: 0.8rem;
  }
</style>