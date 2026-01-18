import { defineStore } from 'pinia'
import Quests from '@/data/quests.json'

export const usePlayerStore = defineStore('player', {
  state: () => ({
    name: '',
    profilePic: null,
    xp: 0,
    level: 1,
    inventory: [],
    points: 0,
    currentQuest: null,
    questsCompleted: [],
    tasksCompleted: [],
    allQuests: [...Quests]
  }),

  actions: {
    setName(name) {
      this.name = name
      localStorage.setItem('playerName', name)
    },

    setCurrentQuest(questId) {
      this.currentQuest = this.allQuests.find(quest => quest.id === questId) || null
      localStorage.setItem('currentQuestId', questId)
    },

    awardPoints(points) {
      this.points += points
      localStorage.setItem('playerPoints', this.points)
    },

    awardXp(xp) {
      this.xp += xp
      localStorage.setItem('playerXp', this.xp)
    },

    addCompletedQuest(questId) {
      if (!this.questsCompleted.includes(questId)) {
        this.questsCompleted.push(questId)
      }
    },

    loadFromStorage() {
      const savedName = localStorage.getItem('playerName')
      if (savedName) this.name = savedName

      const savedPoints = localStorage.getItem('playerPoints')
      if (savedPoints) this.points = parseInt(savedPoints)

      const savedXp = localStorage.getItem('playerXp')
      if (savedXp) this.xp = parseInt(savedXp)

      const savedCurrentQuestId = localStorage.getItem('currentQuestId')
      if (savedCurrentQuestId) {
        this.setCurrentQuest(savedCurrentQuestId)
      }
    }
  }
})
