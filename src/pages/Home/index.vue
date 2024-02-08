<template>
  <div>
    <div class="flex flex-col gap-5">
      <div class="flex flex-row gap-5">
        <Card
          v-for="(item, index) in transactionData"
          :key="index"
          :title="item.title"
          :amount="formatAmount(item.amount)"
          :icon="item.icon"
          :trendIcon="item.trendIcon"
          :percentage="item.percentage"
          :period="item.period"
          :action="item.action"
        />
      </div>
      <div class="relative overflow-x-auto shadow-md rounded-lg">
        <table class="w-full text-sm text-left text-[#080808]">
          <caption
            class="p-5 text-lg font-semibold text-left text-[#080808] bg-white"
          >
            User List
          </caption>
          <thead class="text-md text-[#080808] bg-[#FAFBFC] shadow-inner">
            <tr>
              <th
                v-for="(column, index) in tableHead"
                :key="index"
                :scope="column.scope"
                :class="column.class"
              >
                {{ column.label }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in userData.users"
              :key="index"
              class="bg-white text-[#080808] shadow-inner"
            >
              <td class="px-6 py-4 text-center text-[12px]">
                {{ index + 1 }}
              </td>
              <td class="px-6 py-4 text-[12px]">
                <div class="flex flex-row justify-start gap-2 items-center">
                  <img
                    class="w-6 h-6"
                    :src="item.profile_picture"
                    :alt="item.first_name"
                  />
                  {{ item.first_name + ' ' + item.last_name }}
                </div>
              </td>
              <td class="px-6 py-4 text-[12px]">
                {{ formatDate(item.date_of_birth) }}
              </td>
              <td class="px-6 py-4 text-[12px] font-semibold">
                {{ item.email }}
              </td>
              <td class="px-6 py-4 text-[12px]">{{ item.job }}</td>
              <td class="px-6 py-4 text-[12px] font-semibold">
                {{ item.country }}
              </td>
              <td class="px-6">
                <div class="flex flex-row gap-2 justify-center items-center">
                  <button class="px-4 py-1 shadow-md text-[10px] text-center">
                    Select
                  </button>
                  <button
                    @click="openDialog(item)"
                    class="px-4 py-1 shadow-md text-[10px] text-center"
                  >
                    View Detail
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Dialog
        :visible="dialogVisible"
        :userDetail="userDetail"
        @update:visible="handleDialogVisibility"
      />
    </div>
  </div>
</template>

<script setup>
  import Card from './components/Card.vue';
  import Dialog from '../../components/Dialog.vue';
  import { formatAmount, formatDate } from '../../utils/general';
  import { transactionData, tableHead } from '../../data/dashboard.js';
  import { backendRequest } from '../../utils/backend-request';
  import { onMounted, ref } from 'vue';

  const userData = ref([]);
  const dialogVisible = ref(false);
  const userDetail = ref({});

  const openDialog = (item) => {
    dialogVisible.value = !dialogVisible.value;
    userDetail.value = item;
  };

  const handleDialogVisibility = (value) => {
    dialogVisible.value = value;
  };

  async function fetchUserData() {
    try {
      const res = await backendRequest().get('/v1/sample-data/users');
      userData.value = res.data;
    } catch (error) {
      console.error('Error fetching users data:', error);
    }
  }

  onMounted(fetchUserData);
</script>
