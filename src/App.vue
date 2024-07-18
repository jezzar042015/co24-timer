<template>
  <TheHome v-if="pageStore.active === 'home'" />
  <TheTimer v-if="pageStore.active === 'timer'" />
</template>

<script setup lang="ts">
  import TheHome from './components/TheHome.vue';
  import TheTimer from './components/TheTimer.vue';
  import { usePageStore } from './stores/pages';

  const pageStore = usePageStore()

</script>
