<script setup>
import User from '@/components/ui/User.vue';
import TapGame from '@/components/quests/TapGame.vue';

const birthday = new Date().toLocaleDateString('en-CA', {
  month: '2-digit',
  day: '2-digit'
});

</script>
<template>
  <div id="dashboard" class="container" style="height: 100vh;">
    <div class="stack-md">
      <h1>Dashboard</h1>
      <hr />
      <p class="birthday-message" v-if="birthday === '01-19'">🎈 Happy Birthday Mitch! 🎂</p>
      <p class="dash-msg" v-else>See your current quest, level and points accumulated or finished tasks and quests. Play the Tap Game for more points!</p>
      <User />
      <TapGame />
    </div>
  </div>
</template>
<style scoped>
  .dash-msg {
    font-size: 0.8rem;
  }
  .birthday-message {
    border-radius: 8px;
    font-family: var(--font-body);
    box-shadow: var(--shadow-panel);
    font-size: 1.2rem;
    font-weight: bold;
    color: purple;
    background-color: gold;
    padding: 0.5rem;
    margin-bottom: 0;
    text-align: center
  }
</style>
