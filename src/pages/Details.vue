<script setup>
  import { usePlayerStore } from '../stores/player';
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import Quests from '../data/quests.json';

  const route = useRoute();
  const questId = route.params.id;
  const questDetail = Quests.filter(q => q.id == questId);
  const playerStore = usePlayerStore();

  console.log("quest detail from Details", questDetail);

  const loadPlayerData = () => {
    playerStore.loadFromStorage();
  }; 

  onMounted(() => {
    loadPlayerData();
  });

 const completedQuests = playerStore.questsCompleted;
 console.log("Completed from Details", completedQuests);

</script>
<template>
  <div class="container details-page">
    <h1>Details Page</h1>
    <hr />
    <div class="quest-full-detail" v-if="questDetail.length > 0">
      <h2>{{ questDetail[0].title }}</h2>
      <img :src="`../src/assets/images/quests/${questDetail[0].id}.jpg`" :alt="questDetail[0].title" />
      <p><strong>Description:</strong> {{ questDetail[0].description }}</p>
      <p v-if="questDetail[0].detailInfo"><strong>Additional Info:</strong> {{ questDetail[0].detailInfo }}</p>
      <p><strong>Date:</strong> {{ questDetail[0].date }}</p>
      <p><strong>Time:</strong> {{ questDetail[0].time }} - {{ questDetail[0].endTime }}</p>
      <p><strong>Location:</strong> {{ questDetail[0].location }}</p>
      <p><strong>Reward:</strong> {{ questDetail[0].rewardExp }} points</p>
      <div class="setActiveQuest" v-if="!completedQuests.includes(questDetail[0].id)">
        <button type="button" @click="playerStore.setCurrentQuest(questDetail[0].id)">Set Active Quest</button>
      </div>
      <div class="completed" v-else>Completed</div>
    </div>
    <div v-else>
      <p>No quest found. Go to the Quest List to get it's details.</p>
    </div>
    <div class="back"><a href="/quests">Back to All Quests</a></div>
  </div>
</template>
<style scoped>
  h2 {
    margin-bottom: 0.5rem;
    color: maroon;
  }
  a {
    color: purple;
  }
  .setActiveQuest {
    margin-bottom: 1rem;
  }
  .back {
    display: flex;
    justify-content: flex-end;
  }
  .completed {
    font-weight: bold;
    color: #065004;
    background-color: gold;
    padding: 0.5rem;
    text-align: center;
    margin-bottom: 1rem;
  }

  img {
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
    border-radius: 8px;
  }
</style>