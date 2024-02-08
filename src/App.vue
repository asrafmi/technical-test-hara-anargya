<script setup>
  import LeftNavigation from './components/LeftNavigation.vue';
  import Header from './components/Header.vue';
</script>

<template>
  <LeftNavigation />
  <div class="sm:ml-64">
    <Header />
    <div class="p-4">
        <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
