<script setup>
  import { usePlayerStore } from '../../stores/player'
  const playerStore = usePlayerStore()

  const testProgress = "50";

  const loadPlayerData = () => {
    playerStore.loadFromStorage()
  }
  loadPlayerData()
</script>
<template>
  <section id="user-info" role="presentation">
  <div class="user-info">
    <div class="player-name">{{ playerStore.name }}</div>
    <div class="player-points">
      <span class="score">CURRENT QUEST</span><br>
      <span class="score">{{ playerStore.currentQuest ? playerStore.currentQuest.title : 'N/A' }}</span><br>
      <span class="score">SCORE</span><br>
      <span class="points">{{ playerStore.points }}</span>&nbsp;
      <span class="fa fa-ruble"></span>
    </div>
  </div>
  <div class="user-level">
    <div class="player-level">
      <div class="level-ball">
        <span class="lvlLabel">LVL</span>
        <span class="actualLevel">{{ playerStore.level }}</span>
      </div>
    </div>
    <div class="level-up">
      <div class="level-up-indicator">
        <div class="level-up-fill" :style="{ width: playerStore.levelProgress + '%' }"></div>
         <!-- <div class="level-up-fill" :style="{ width: testProgress + '%' }"></div> -->
      </div>
    </div>
  </div>
  </section>
</template>
<style scoped>
  .user-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 1.2rem;
    padding: 0 0 0.5rem 0;
    background-color: #fff;
    border-radius: 8px;
    line-height: 1.4;
    box-shadow: var(--shadow-panel);
  }
  .score {
    font-size: 0.6rem;
    letter-spacing: 1px;
  }
  .points {
    color: purple;
    font-weight: bold;
  }
  .player-points {
    text-align: center;
  }
  .player-name {
    font-weight: bold;
    background-color: gold;
    box-shadow: var(--shadow-panel);
    padding: 0.2rem;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    text-align: center;
  }
  .user-level {
    display: grid;
    grid-template-columns: 1fr 3fr;
    padding: 0.5rem 0;
    gap: 0.5rem;
  }
  .actualLevel {
    font-size: 1.2rem;
  }
  .lvlLabel {
    font-size: .6rem;
  }
  .player-level {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .level-ball {
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    border: 1px solid transparent;
    background-color: #fff;
    aspect-ratio: 1/1;
    justify-content: center;
    box-shadow: var(--shadow-panel);
    border-radius: 8px;
  }

  .level-up {
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 0 1rem;
    box-shadow: var(--shadow-panel);
    border-radius: 8px;
  }
  .level-up-indicator {
    background-color: transparent;
    width: 100%;
    height: 20px;
    border: 2px solid #000;
    border-radius: 10px;
    overflow: hidden;
  }

  .level-up-fill {
    background-color: purple;
    height: 100%;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

</style>