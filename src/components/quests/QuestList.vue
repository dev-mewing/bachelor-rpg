<script setup>
  import { usePlayerStore } from '../../stores/player'
  import Quests from '../../data/quests.json'
  const playerStore = usePlayerStore()

  const loadPlayerData = () => {
    playerStore.loadFromStorage()
  }
  loadPlayerData()

  const completedQuests = Quests.filter(quest => playerStore.questsCompleted.includes(quest.id));
  // console.log('Completed Quests:', completedQuests);

</script>
<template>
  <div class="container quest-list">
    <h1>Completed Quests</h1>
    <hr />
    <ul v-if="playerStore.questsCompleted.length > 0">
      <li v-for="quest in completedQuests" :key="quest.id">
        <div><h5>{{ quest.title }}</h5></div>
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
  h5 {
    font-size: 1rem;
    font-family: var(--font-heading);
    color: #065004;
    text-decoration: line-through;
  }
</style>