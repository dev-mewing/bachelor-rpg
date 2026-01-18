<script setup>

  import Modal from '../ui/Modal.vue';

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
  <Modal :data="quest" :title="quest.title" :visible="isOpen" @close="emit('close')" />
</template>
<style scoped>

</style>