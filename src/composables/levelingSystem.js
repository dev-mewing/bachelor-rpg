// src/composables/levelingSystem.js
export class RPGLevelingSystem {
  constructor(baseXP = 10, exponent = 1.5) {
    this.baseXP = baseXP;
    this.exponent = exponent;
  }

  getXPForLevel(level) {
    if (level <= 1) return 0;
    return Math.floor(this.baseXP * Math.pow(level - 1, this.exponent));
  }

  getTotalXPForLevel(level) {
    let total = 0;
    for (let i = 2; i <= level; i++) {
      total += this.getXPForLevel(i);
    }
    return total;
  }

  calculateLevel(xp) {
    let level = 1;
    while (xp >= this.getTotalXPForLevel(level + 1)) {
      level++;
    }
    return level;
  }

  getLevelInfo(xp, currentLevel) {
    const level = this.calculateLevel(xp);
    const currentLevelXP = this.getTotalXPForLevel(level);
    const nextLevelXP = this.getTotalXPForLevel(level + 1);
    const xpIntoCurrentLevel = xp - currentLevelXP;
    const xpNeededForNext = nextLevelXP - currentLevelXP;
    const progress = (xpIntoCurrentLevel / xpNeededForNext) * 100;

    return {
      level,
      xp,
      currentLevelXP,
      nextLevelXP,
      xpIntoCurrentLevel,
      xpNeededForNext,
      progress: Math.min(progress, 100),
      leveledUp: level > currentLevel
    };
  }
}

export const levelSystem = new RPGLevelingSystem();