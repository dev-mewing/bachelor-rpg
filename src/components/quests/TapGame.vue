<script setup>

import { usePlayerStore } from '../../stores/player'

const playerStore = usePlayerStore()

const loadPlayerData = () => {
  playerStore.loadFromStorage() 
}

loadPlayerData()


</script>

<template>
  <section class="rpg-btn-area">
    <!-- <div class="play-area">
      <div class="monster-area"></div>
    </div> -->
    <button @click="playerStore.addClickPoints()" class="rpg-btn">Tap</button>
  </section>
</template>
<style scoped>
  .rpg-btn-area {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 1.5rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
.rpg-btn {
  padding: 1rem 1.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  width: 100%;
  max-width: 300px;

  background: linear-gradient(180deg, #3b2f2f, #2a1f1f);
  color: #f5e6c8;

  border: 2px solid #c9a86a;
  border-radius: 8px;

  box-shadow:
    0 0 6px rgba(201, 168, 106, 0.6),
    inset 0 0 4px rgba(255, 255, 255, 0.1);

  cursor: pointer;
  transition:
    transform 0.1s ease,
    box-shadow 0.2s ease,
    background 0.2s ease;
}

.rpg-btn:hover {
  box-shadow:
    0 0 10px rgba(255, 215, 140, 0.9),
    inset 0 0 6px rgba(255, 255, 255, 0.15);
  background: linear-gradient(180deg, #4a3a3a, #2f2424);
}

.rpg-btn:active {
  transform: scale(0.96);
  box-shadow:
    0 0 4px rgba(255, 215, 140, 0.6),
    inset 0 0 8px rgba(0, 0, 0, 0.3);
}

.play-area {
  display: flex;
  justify-content: center;
  align-items: center;
}
.monster-area {
  aspect-ratio: 1/1;
  width: 260px;
  margin: 0 auto;
  background-image: url('@/assets/images/brand/enemies.png');
  background-repeat: no-repeat;
  /* Above is Minotaur */
  /*Devil*/
  background-position: top right;
  /* */
  background-position: bottom right;
}
</style>