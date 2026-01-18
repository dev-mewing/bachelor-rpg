<script setup>

  defineProps({
    quest: {
      type: Object,
      required: true
    },
    isOpen: {
      type: Boolean,
      default: false
    }
  });
  const emit = defineEmits(['close']);
</script>
<template>
  <div class="container">
    <div>{{ quest.title }}</div>
  </div>
</template>
<style scoped>

</style>