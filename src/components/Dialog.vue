<template>
  <transition name="dialog">
    <div
      v-if="visible"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="relative bg-white p-8 rounded-lg shadow-lg">
        <div v-if="userDetail" class="flex flex-col gap-3">
          <div class="flex flex-row gap-3">
            <img
              :src="userDetail.profile_picture"
              class="rounded-full w-36 h-36"
            />
            <div class="flex flex-col items-start justify-center gap-1">
              <h1 class="text-xl text-[#080808] font-bold">
                {{ userDetail.first_name + ' ' + userDetail.last_name }}
              </h1>
              <p class="text-md text-[#080808]">
                {{ userDetail.email }}
              </p>
              <p class="text-md text-[#080808]">
                {{ userDetail.phone }}
              </p>
            </div>
          </div>
          <div class="flex flex-row gap-3">
            <div class="flex flex-col items-start gap-1">
              <p class="text-md text-[#080808]">
                <b>Job:</b>
                {{ userDetail.job }}
              </p>
              <p class="text-md text-[#080808]">
                <b>Gender: </b>
                {{ userDetail.gender }}
              </p>
              <p class="text-md text-[#080808]">
                <b>Country: </b>
                {{ userDetail.country }}
              </p>
            </div>
            <div class="flex flex-col items-start gap-1">
              <p class="text-md text-[#080808]">
                <b>City: </b>
                {{ userDetail.city }}
              </p>
              <p class="text-md text-[#080808]">
                <b>State: </b>
                {{ userDetail.state }}
              </p>
              <p class="text-md text-[#080808]">
                <b>Date of Birth: </b>
                {{ formatDate(userDetail.date_of_birth) }}
              </p>
              <p class="text-md text-[#080808]">
                <b>Street: </b>
                {{ userDetail.street }}
              </p>
            </div>
          </div>
        </div>
        <div v-else class="flex flex-col gap-3">
          <div class="flex justify-center items-center">
            <h1 class="text-[#080808] text-lg font-semibold">{{ title }}</h1>
          </div>
          <div class="flex flex-col gap-2 justify-center items-center">
            <img src="../assets/images/deadline.jpg" class="w-64 h-64"/>
            <p class="text-black">{{ description }}</p>
          </div>
        </div>
        <div
          class="absolute top-3 right-3 hover:bg-red-300 h-7 w-7 flex justify-center items-center rounded-full transition ease-in"
          @click="closeDialog"
        >
          <Icon icon="mdi:close" class="h-5 w-5 text-red-500" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
  import { Icon } from '@iconify/vue';
  import { formatDate } from '../utils/general';

  const emit = defineEmits(['update:visible']);

  const props = defineProps({
    visible: Boolean,
    comingSoon: Boolean,
    userDetail: Object,
    title: String,
    description: String,
  });

  const closeDialog = () => {
    emit('update:visible', false);
  };
</script>

<style scoped>
  .dialog-enter-active,
  .dialog-leave-active {
    transition: opacity 0.3s ease;
  }
  .dialog-enter-from,
  .dialog-leave-to {
    opacity: 0;
  }
</style>
