import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { createPinia } from 'pinia'
import { usePlayerStore } from './stores/player'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const player = usePlayerStore()
player.loadFromStorage()

app.mount('#app')
