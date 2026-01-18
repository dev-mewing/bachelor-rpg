import { defineStore } from 'pinia'
import Quests from '@/data/quests.json'
import Tasks from '@/data/tasks.json'
import { levelSystem } from '@/composables/levelingSystem.js'

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
    allQuests: [...Quests],
    allTasks: [...Tasks],
  }),

  getters: {

    getCurrentQuest() {
      return this.currentQuest ? this.currentQuest : 'No active quest'
    },

    levelInfo() {
      return levelSystem.getLevelInfo(this.xp, this.level);
    },

    levelProgress() {
      return this.levelInfo.progress;
    },

    xpToNextLevel() {
      return this.levelInfo.xpNeededForNext - this.levelInfo.xpIntoCurrentLevel;
    }

  },

  actions: {
    setName(name) {
      this.name = name
      localStorage.setItem('playerName', name)
    },

    setCurrentQuest(questId) {
      this.currentQuest = this.allQuests.find(quest => quest.id == questId)
      console.log("Current from player.js", this.currentQuest);
      localStorage.setItem('currentQuest', questId)
    },

    awardPoints(points) {
      this.points += points
      localStorage.setItem('playerPoints', this.points)

      this.awardXp(points)
    },

    awardXp(xp) {
      const oldLevel = this.level
      this.xp += xp

      const levelInfo = levelSystem.getLevelInfo(this.xp, oldLevel);

      if (levelInfo.leveledUp) {
        this.level = levelInfo.level;
        console.log("Leveled up to level " + this.level + "!");
      }

      localStorage.setItem('playerXp', this.xp)
      localStorage.setItem('playerLevel', this.level)

    },

    addClickPoints() {
      this.awardPoints(1)
    },

    completeQuest(questId) {
      if (!this.questsCompleted.includes(questId)) {
        this.questsCompleted.push(questId)
        localStorage.setItem('questsCompleted', JSON.stringify(this.questsCompleted))
        //award points for completing quest
        const quest = this.allQuests.find(q => q.id == questId)
        if (quest) {
          this.awardPoints(quest.rewardExp)
          alert("Quest Completed! You earned " + quest.rewardExp + " points.");
        }
        //quest was completed so reset currentQuest
        this.currentQuest = null
        localStorage.removeItem('currentQuest')
      }
    },

    completeTask(task) {
      if (!this.tasksCompleted.includes(task.id)) {
        this.tasksCompleted.push(task.id)
        localStorage.setItem('tasksCompleted', JSON.stringify(this.tasksCompleted))
        this.awardPoints(task.rewardExp)
      }
    },

    loadFromStorage() {
      const savedName = localStorage.getItem('playerName')
      if (savedName) this.name = savedName

      const savedPoints = localStorage.getItem('playerPoints')
      if (savedPoints) this.points = parseInt(savedPoints)

      const savedXp = localStorage.getItem('playerXp')
      if (savedXp) this.xp = parseInt(savedXp)

      const savedLevel = localStorage.getItem('playerLevel')
      if (savedLevel) this.level = parseInt(savedLevel)

      const savedCurrentQuest = localStorage.getItem('currentQuest')
      if (savedCurrentQuest) {
        this.setCurrentQuest(savedCurrentQuest)
      }

      const savedQuestsCompleted = localStorage.getItem('questsCompleted')
      if (savedQuestsCompleted) {
        this.questsCompleted = JSON.parse(savedQuestsCompleted)
      }

      const savedTasksCompleted = localStorage.getItem('tasksCompleted')
      if (savedTasksCompleted) {
        this.tasksCompleted = JSON.parse(savedTasksCompleted)
      }
  }
  }}
)