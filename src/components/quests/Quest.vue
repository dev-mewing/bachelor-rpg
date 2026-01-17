<!-- Current Quest -->
<script setup>
  import { usePlayerStore } from '../../stores/player'
  const playerStore = usePlayerStore()  
  const loadPlayerData = () => {
    playerStore.loadFromStorage()
  }
  loadPlayerData()
</script>
<template>
  <div class="container">
    <h1>Current Quest</h1>
    <hr />
    <div v-if="playerStore.currentQuest" class="quest-details">
      <h2>{{ playerStore.currentQuest.name }}</h2>
      <p>{{ playerStore.currentQuest.description }}</p>
      <p><strong>Reward:</strong> {{ playerStore.currentQuest.reward }} points</p>
    </div>
    <div v-else class="no-current-quest">
      <p>No current quest. Please select a quest from the quest list.</p>
    </div>
  </div>
</template>
<style scoped>
  .no-current-quest {
    text-align: center;
    font-style: italic;
  }
</style>