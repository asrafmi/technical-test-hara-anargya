<template>
  <div class="flex flex-col gap-3">
    <ProvinceTable />
    <CityTable />
  </div>
</template>

<script setup>
  import ProvinceTable from './components/ProvinceTable.vue';
  import CityTable from './components/CityTable.vue';
</script>
