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
      <li class="menu-link"><a href="/">Home</a></li>
      <li class="menu-link"><a href="/dashboard">Dashboard</a></li>
      <li class="menu-link"><a href="/quests">Quests</a></li>
      <li class="menu-link"><a href="/tasks">Tasks</a></li>
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
  .menu ul li.menu-link {
    font-size: 1rem;
    width: 200px;
    border: 1px solid gold;
    padding: 0.5rem;
    border-radius: 8px;
    text-align: center;
    letter-spacing: 0.8px;
  }

  .menu ul li.menu-link:hover {
    background-color: gold;
  }

  .menu ul li.menu-link a {
    color: #fff;
    text-shadow: var(--shadow-panel);
    text-transform: uppercase;
    width: 100%;
    height: 100%;
    display: block;
  }

  .menu ul li.menu-link a:hover {
    color: #000;
  }
  button {
    background-color: rgb(104, 21, 21);
    width: 200px;
    padding: 0.5rem;
    color: #fff;
  }
</style>