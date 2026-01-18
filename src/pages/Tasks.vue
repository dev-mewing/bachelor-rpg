<script setup>
  import { usePlayerStore } from '@/stores/player'
  const playerStore = usePlayerStore()
  const allTasks = playerStore.allTasks;
</script>
<template>
  <div class="container">
    <h1>Tasks</h1>
    <hr />
    <div class="additional-note">Got a task you want to add? Share it in the group chat and we'll add it to the list!</div>
    <ul>
      <li v-for="task in allTasks" :key="task.id">
        <span class="task-title" :class="{ 'striked': playerStore.tasksCompleted.includes(task.id) }">{{ task.title }}</span>
        <button type="button" class="checklist-btn" @click="playerStore.completeTask(task)" :disabled="playerStore.tasksCompleted.includes(task.id)">
          <span v-if="playerStore.tasksCompleted.includes(task.id)" class="fa fa-dot-circle-o"></span>
          <span v-else class="fa fa-circle-o"></span>
        </button>
      </li>
    </ul>
  </div>
</template>
<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
    font-family: var(--font-body);
    font-size: 0.8rem;
  }
  li {
    padding: 0.5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #065004;
  }
  .striked {
    text-decoration: line-through;
    color: gray;
  }
  .task-title {
    color: maroon;
  }
  button.checklist-btn {
    font-size: 1.6rem;
    background-color: transparent;
    color: maroon;
    border: none;
    margin: 0;
    padding: 0;
  }
  .additional-note {
    margin-top: 1rem;
    font-size: 0.8rem;
    font-style: italic;
    color: #333;
    text-align: center;
  }
</style>