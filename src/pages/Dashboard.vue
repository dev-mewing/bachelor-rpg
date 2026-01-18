<script setup>
import User from '@/components/ui/User.vue';
import TapGame from '@/components/quests/TapGame.vue';

</script>
<template>
  <div id="dashboard" class="container" style="height: 100vh;">
    <div class="stack-md">
      <h1>Dashboard</h1>
      <User />
      <p>Check your current quest. Prepare your equipment or level up. Train your skills and accumulate points with the Tap Game.</p>
      <TapGame />
    </div>
  </div>
</template>
<style scoped>
 
</style>
