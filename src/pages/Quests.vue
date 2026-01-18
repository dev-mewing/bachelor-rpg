<script setup>
  import AllQuests from '@/components/quests/AllQuests.vue';
  import Quest from '@/components/quests/Quest.vue';
  import QuestList from '@/components/quests/QuestList.vue';
  import { onMounted, ref } from 'vue';

  const currentTab = ref('allQuests');

  const changeTab = (tab) => {
    currentTab.value = tab;
  };
  
</script>
<template>
  <div class="tab-wrapper">
    <div class="tab-controls">
      <div class="tabs">
      <button
        type="button"
        class="tab-btn"
        :class="{ active: currentTab === 'allQuests' }" 
        @click="changeTab('allQuests')"
      >
        All
      </button>
      <button
        type="button"
        class="tab-btn" 
        :class="{ active: currentTab === 'currentQuest' }" 
        @click="changeTab('currentQuest')"
      >
        Current
      </button>
      <button 
        type="button"
        class="tab-btn"
        :class="{ active: currentTab === 'questList' }" 
        @click="changeTab('questList')"
      >
        Completed
      </button>
    </div>
    </div>
    <AllQuests v-if="currentTab === 'allQuests'" />
    <Quest v-else-if="currentTab === 'currentQuest'" />
    <QuestList v-else-if="currentTab === 'questList'" />
  </div>
</template>
<style scoped>
  .tab-controls {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }
  .tabs {
    display: flex;
    gap: 1rem;
  }
  .tabs button:hover {
    transform: unset;
  }
</style>