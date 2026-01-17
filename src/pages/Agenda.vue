<script setup>

</script>
<template>
  <div class="agenda-page">
    <h1 class="agenda-title">Agenda</h1>
    <div class="agenda-intro">
      <p>Gather 'round, brave adventurers, for the time has come to chart our course through the grand quest that awaits!</p>
      <p>Within these hallowed scrolls lies the timeline of our epic weekend journey—a carefully crafted itinerary of challenges, festivities, and legendary encounters that shall test your mettle and forge bonds of fellowship.</p>
    </div>
  </div>
</template>
<style scoped>
  /* Agenda Page Styling - Fantasy RPG Theme */

.agenda-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Georgia', 'Times New Roman', serif;
  color: #2a2a2a;
}

/* Main Title Styling */
.agenda-title {
  text-align: center;
  font-size: 3.5rem;
  color: #8B4513;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 30px;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-family: 'Georgia', serif;
}

/* Introduction Paragraph */
.agenda-intro {
  background: linear-gradient(135deg, #F4E8D0 0%, #E8D7B0 100%);
  border: 3px solid #8B7355;
  border-radius: 10px;
  padding: 30px;
  margin-bottom: 50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  font-size: 1.1rem;
  line-height: 1.8;
  text-align: center;
  font-style: italic;
  color: #3a3a3a;
}

/* Day Section Container */
.day-section {
  background: url('scroll-background.svg') no-repeat center;
  background-size: contain;
  padding: 80px 100px;
  margin-bottom: 60px;
  min-height: 400px;
  position: relative;
}

/* Day Headers */
.day-header {
  font-size: 2.5rem;
  color: #8B4513;
  text-align: center;
  margin-bottom: 30px;
  font-weight: bold;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  border-bottom: 3px solid #D4AF37;
  padding-bottom: 15px;
  letter-spacing: 1px;
}

/* Event List */
.event-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.event-item {
  background: rgba(255, 255, 255, 0.6);
  border-left: 5px solid #D4AF37;
  padding: 20px 25px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.event-item:hover {
  transform: translateX(10px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.8);
}

/* Event Time */
.event-time {
  font-weight: bold;
  color: #8B4513;
  font-size: 1.2rem;
  margin-bottom: 8px;
  display: block;
  font-family: 'Courier New', monospace;
}

/* Event Title */
.event-title {
  font-size: 1.3rem;
  color: #2a2a2a;
  font-weight: bold;
  margin-bottom: 5px;
}

/* Event Description */
.event-description {
  color: #555;
  font-size: 1rem;
  line-height: 1.6;
  margin-top: 8px;
}

/* Decorative Elements */
.day-section::before {
  content: "⚔";
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2rem;
  color: #D4AF37;
  opacity: 0.5;
}

/* Responsive Design */
@media (max-width: 768px) {
  .agenda-title {
    font-size: 2.5rem;
  }
  
  .day-section {
    padding: 60px 40px;
  }
  
  .day-header {
    font-size: 2rem;
  }
  
  .event-item {
    padding: 15px 20px;
  }
  
  .event-time {
    font-size: 1.1rem;
  }
  
  .event-title {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .agenda-title {
    font-size: 2rem;
  }
  
  .day-section {
    padding: 40px 20px;
  }
  
  .agenda-intro {
    padding: 20px;
    font-size: 1rem;
  }
}
</style>