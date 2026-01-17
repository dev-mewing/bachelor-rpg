<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { usePlayerStore } from '../stores/player'

const name = ref('')
const router = useRouter()
const player = usePlayerStore()

function login() {
  if (!name.value) return
  player.setName(name.value)
  player.award
  router.push('/dashboard')
}

const checkAlreadyLoggedIn = onMounted(() => {
  if (player.name) {
    router.push('/dashboard')
  }
})
</script>

<template>
  <div class="panel flex-center" style="height: 100vh;">
    <div class="stack-md">
      <h1>Enter Your Adventurer Name</h1>
      <input v-model="name" placeholder="e.g., Sir Chad the Bold" />
      <button @click="login">Begin Quest</button>
    </div>
  </div>
</template>
