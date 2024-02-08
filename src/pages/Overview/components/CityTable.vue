<template>
  <div class="relative overflow-x-auto shadow-md rounded-lg">
    <SearchInput
      placeholder="Search City by Province ID"
      :value="provinceID"
      @update:value="handleSearch"
    />
    <table class="w-full text-sm text-left text-[#080808]">
      <caption
        class="p-5 text-lg font-semibold text-left text-[#080808] bg-white"
      >
        City List
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
          v-for="(item, index) in city"
          :v-model="city"
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
          v-if="!city.length"
          :v-model="city"
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
  import SearchInput from '../../../components/SearchInput.vue';
  import { tableHead } from '../../../data/overview';
  import cityData from '../../../assets/js/city';

  const provinceID = ref('');

  const city = ref(cityData);
  const filteredCity = ref([]);
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
    sortCity(field);
  };

  const sortCity = (field) => {
    city.value.sort((a, b) => {
      if (a[field] > b[field]) {
        return sortOrders[field];
      }
      if (a[field] < b[field]) {
        return -sortOrders[field];
      }
      return 0;
    });
  };

  const handleSearch = (value) => {
    provinceID.value = value;
    findCityByProvinceID(value);
  };

  const findCityByProvinceID = (id) => {
    if (!id) {
      city.value = cityData;
    } else {
      city.value = cityData;
      // @ts-ignore
      filteredCity.value = city.value.filter((item) => {
        return item.provinsi_id === parseInt(id);
      });
      city.value = filteredCity.value;
    }
  };
</script>
