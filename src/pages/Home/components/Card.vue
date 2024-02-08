<template>
  <div class="bg-white shadow-md rounded-[10px] w-full">
    <div class="flex flex-row p-4 justify-between">
      <div class="flex flex-col gap-3">
        <p class="text-[#727272] text-[12px]">{{ title }}</p>
        <div class="flex flex-row">
          <p class="text-[#080808]">{{ amountBeforeDecimal }}</p>
          <p v-if="amountAfterDecimal" class="text-[#9A9A9A]">
            ,{{ amountAfterDecimal }}
          </p>
        </div>
      </div>
      <div
        class="flex justify-center items-center bg-[#F2F4F7] h-9 w-9 rounded-md"
      >
        <img :src="icon" />
      </div>
    </div>
    <div class="bg-[#F9FAFC] rounded-b-[10px] p-5">
      <div class="flex flex-row justify-between">
        <div>
          <div class="flex flex-row gap-2 items-center">
            <div class="flex flex-row items-center">
              <img class="w-4 h-4 mt-[2px]" :src="trendIcon" />
              <p
                v-if="trendIcon?.includes('green')"
                class="text-[10px] text-[#4CBF93]"
              >
                {{ percentage }}
              </p>
              <p v-else class="text-[10px] text-[#EE7C85]">{{ percentage }}</p>
            </div>
            <p class="text-[10px] text-[#AAAAAA]">{{ period }}</p>
          </div>
        </div>
        <div @click="openDialog">
          <p class="text-[#6E6E6E] text-[10px] hover:text-gray-700">{{ action }}</p>
        </div>
      </div>
    </div>
    <Dialog :visible="dialogVisible" @update:visible="handleDialogVisibility" title="Coming Soon!" description="This feature will be release soon, stay with us!" comingSoon/>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import Dialog from '../../../components/Dialog.vue';
  const props = defineProps({
    title: String,
    amount: String,
    icon: String,
    trendIcon: String,
    percentage: String,
    period: String,
    action: String,
  });
  const dialogVisible = ref(false);

  const openDialog = () => {
    dialogVisible.value = !dialogVisible.value;
  };

  const handleDialogVisibility = (value) => {
    dialogVisible.value = value;
  };
  // @ts-ignore
  const [amountBeforeDecimal, amountAfterDecimal] = props.amount?.split(',');
  console.log('amountBeforeDecimal', amountBeforeDecimal);
  console.log('amountAfterDecimal', amountAfterDecimal);
</script>
