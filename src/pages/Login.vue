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

onMounted(() => {
  if (player.name) {
    router.push('/dashboard')
  }
})

</script>

<template>
  <div class="container" style="height: 100vh;">
    <div class="login-form">
      <h1>Bachelor RPG</h1>
      <div class="field">
        <label for="login-name">Adventurer name:</label>
        <input type="text" id="login-name" name="login-name" v-model="name" placeholder="Will the Wise" />
      </div>
      <button @click="login">Begin Quest</button>
    </div>
  </div>
</template>
<style scoped>
  .login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .login-form .field {
    text-align: center;
  }
  .login-form h1 {
    margin: 1rem auto 2rem;
  }
  .login-form input {
    width: 100%;
    max-width: 300px;
    margin-bottom: 2rem;
    font-size: 1rem;
    border: 1px solid #000;
    border-radius: 4px;
    text-indent: 8px;
    line-height: 150%;
  }
  .login-form button {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
</style>
