<script setup>
  import LeftNavigation from './components/LeftNavigation.vue';
  import Header from './components/Header.vue';
</script>

<template>
  <div class="flex flex-row">
    <LeftNavigation />
    <div class="flex flex-col basis-5/6">
      <Header />
      <div class="bg-[#F7F8FA] h-full p-10">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
