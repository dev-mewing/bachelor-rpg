<script setup>
  import { usePlayerStore } from '../../stores/player'
  const playerStore = usePlayerStore()

  const loadPlayerData = () => {
    playerStore.loadFromStorage()
  }
</script>
<template>
  <div class="container quest-list">
    <h1>Completed Quests</h1>
    <hr />
    <ul v-if="playerStore.questsCompleted.length > 0">
      <li v-for="quest in playerStore.questsCompleted" :key="quest.id">
        <div>{{ quest.name }}</div>
      </li>
    </ul>
    <ul v-else class="no-quests">
      <li>No quests completed yet.</li>
    </ul>
  </div>
</template>
<style scoped>
  ul {
    list-style-type: none;
  }
  .no-quests {
    text-align: center;
    font-style: italic;
  }
</style>