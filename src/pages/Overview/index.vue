<template>
  <div class="relative overflow-x-auto shadow-md rounded-lg">
    <table class="w-full text-sm text-left text-[#080808]">
      <caption
        class="p-5 text-lg font-semibold text-left text-[#080808] bg-white"
      >
        Province List
      </caption>
      <thead class="text-md text-[#080808] bg-[#FAFBFC] shadow-inner">
        <tr>
          <th
            v-for="(column, index) in tableHead"
            :key="index"
            :scope="column.scope"
            :class="column.class"
          >
            <div class="flex flex-row gap-1">
              {{ column.label }}
              <Icon
                v-if="column.sortable"
                :icon="sortIconsRef[column.field]"
                class="h-5 w-5 text-[#080808] cursor-pointer"
                @click="toggleSort(column.field)"
              />
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in province"
          :v-model="province"
          :key="index"
          class="bg-white text-[#080808] shadow-inner"
        >
          <td class="px-6 py-4 text-[12px]">
            {{ item.id }}
          </td>
          <td class="px-6 py-4 text-[12px] font-semibold">
            {{ item.name }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { Icon } from '@iconify/vue';
  import { tableHead } from '../../data/overview';
  import provinceData from '../../assets/js/province';
  
  const province = ref(provinceData);
  const sortOrders = {};
  
  tableHead.forEach((column) => {
    if (column.sortable) {
      sortOrders[column.field] = 1;
    }
  });

  const sortIcons = {
    id: 'mdi:chevron-up',
    name: 'mdi:chevron-up',
  };
  
  const sortIconsRef = ref(sortIcons);

  const toggleSort = (field) => {
    sortOrders[field] = sortOrders[field] * -1;
    for (const key in sortIconsRef.value) {
      if (key === field) {
        sortIconsRef.value[key] =
          sortOrders[field] === 1 ? 'mdi:chevron-up' : 'mdi:chevron-down';
      } else {
        sortIconsRef.value[key] = 'mdi:chevron-up';
      }
    }
    sortProvince(field);
  };

  const sortProvince = (field) => {
    province.value.sort((a, b) => {
      if (a[field] > b[field]) {
        return sortOrders[field];
      }
      if (a[field] < b[field]) {
        return -sortOrders[field];
      }
      return 0;
    });
  };
</script>
