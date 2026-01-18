<script setup>
  import { computed, onMounted } from 'vue';
  import { usePlayerStore } from '../../stores/player'

  const playerStore = usePlayerStore()

  onMounted(() => {
    playerStore.loadFromStorage()
  });

  const fridayEvents = computed(() => {
    return playerStore.allQuests.filter(quest => quest.date === '1/23/2026');
  });

  const saturdayEvents = computed(() => {
    return playerStore.allQuests.filter(quest => quest.date === '1/24/2026');
  });

  const sundayEvents = computed(() => {
    return playerStore.allQuests.filter(quest => quest.date === '1/25/2026');
  });

</script>
<template>
  <div class="container all-quests">
    <h1>All Quests</h1>
    <hr />
    <h2>Fri. Jan 23</h2>
    <ul class="all-quests-list">
      <li v-for="quest in fridayEvents" :key="quest.id" class="all-quests-quest">
        <div class="quest-details">
          <div class="quest-details-left">
            <a :href="`/details/${quest.id}`">
              <span class="quest-title">{{ quest.title }}</span>
              <span class="fa fa-external-link"></span>
            </a>
            <span class="quest-desc">{{ quest.description }}</span>
          </div>
          <div class="quest-details-right">
            <span class="quest-time">{{ quest.time }}</span><br>
            <a :href="`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(quest.location)}`" target="_blank" rel="noopener noreferrer"><span class="icono fa fa-map" title="View location on map"></span></a>
          </div>
        </div>
      </li>
    </ul>
    <h2>Sat. Jan 24</h2>
    <ul class="all-quests-list">
      <li v-for="quest in saturdayEvents" :key="quest.id" class="all-quests-quest">
        <div class="quest-details">
          <div class="quest-details-left">
            <a :href="`/details/${quest.id}`">
              <span class="quest-title">{{ quest.title }}</span>
              <span class="fa fa-external-link"></span>
            </a>
            <span class="quest-desc">{{ quest.description }}</span>
          </div>
          <div class="quest-details-right">
            <span class="quest-time">{{ quest.time }}</span><br>
            <a :href="`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(quest.location)}`" target="_blank" rel="noopener noreferrer"><span class="icono fa fa-map" title="View location on map"></span></a>
          </div>
        </div>
      </li>
    </ul>
    <h2>Sun. Jan 25</h2>
    <ul class="all-quests-list">   
      <li v-for="quest in sundayEvents" :key="quest.id" class="all-quests-quest">
        <div class="quest-details">
          <div class="quest-details-left">
            <a :href="`/details/${quest.id}`">
              <span class="quest-title">{{ quest.title }}</span>
              <span class="fa fa-external-link"></span>
            </a>
            <span class="quest-desc">{{ quest.description }}</span>
          </div>
          <div class="quest-details-right">
            <span class="quest-time">{{ quest.time }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<style scoped>
  a {
    color: maroon;
    text-decoration: none;
  }
  h2 {
    color: #065004;
    margin-bottom: 0;
  }
  .all-quests-list {
    list-style: none;
    padding: 0;
    margin: 0 0 2rem 0;
  }
  .all-quests-quest  {
    border-bottom: 1px solid #065004;
    padding-bottom: 0.5rem;
  }
  .quest-details {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1rem;
    padding: 0.5rem 0;
    align-items: center;
  }
  .quest-details-left {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  .quest-details-right {
    text-align: right;
  }
  .quest-title {
    font-size: 1rem;
    font-weight: bold;
    margin-right: 4px;
  }
  .quest-desc {
    font-size: 0.8rem;
  }
</style>