<script setup>
  defineProps({
    isOpen: {
      type: Boolean,
      required: true
    }
  });

  const emit = defineEmits(['close']);
</script>
<template>
  <Transition name="menu">
    <nav role="navigation" class="container menu" v-if="isOpen">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/dashboard">Dashboard</a></li>
      <li><a href="/quests">Quests</a></li>
      <li><button type="button" @click="$emit('close')">
        <span class="fa fa-close" title="Close menu"></span>
      </button></li>
    </ul>
  </nav>
  </Transition>
</template>
<style scoped>
  .menu {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.9);
    width: 100%;
    min-height: 100dvh;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: top 0.3s ease-in-out;
    z-index: 10;
  }
  .menu ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
</style>