<template>
  <div class="relative overflow-x-auto shadow-md rounded-lg">
    <form class="absolute top-1 right-5">
      <label
        for="default-search"
        class="mb-2 text-sm font-medium text-gray-900 sr-only"
        >Search</label
      >
      <div class="relative flex items-center">
        <div
          class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
        >
          <svg
            class="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search Province by City ID"
          v-model="cityID"
          @input="findProvinceByCityID(cityID)"
        />
      </div>
    </form>
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
        <tr
          v-if="!province.length"
          :v-model="province"
          class="bg-white text-[#080808] shadow-inner"
        >
          <td class="px-6 py-4 text-[12px] font-semibold items-center">
            <h1 class="text-black">No data :(</h1>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { Icon } from '@iconify/vue';
  import { tableHead } from '../../../data/overview';
  import provinceData from '../../../assets/js/province';
  import cityData from '../../../assets/js/city';

  const cityID = ref('');
  const cities = ref(cityData);
  const city = ref({});
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

  const findProvinceByCityID = (id) => {
    if (!id) {
      province.value = provinceData;
    } else {
      // @ts-ignore
      city.value = cities.value.find((item) => item.id === parseInt(id));
      if (city.value) {
        province.value = provinceData;
        const filteredProvince = province.value.filter(
          // @ts-ignore
          (item) => item.id === city.value.provinsi_id
        );
        province.value = filteredProvince;
      } else {
        province.value = [];
      }
    }
  };
</script>
