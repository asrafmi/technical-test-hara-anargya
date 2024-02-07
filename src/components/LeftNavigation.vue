<template>
  <aside
    id="default-sidebar"
    class="top-0 left-0 z-40 basis-1/6 h-screen transition-transform -translate-x-full shadow-md sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 py-4 overflow-y-auto bg-whit">
      <div class="py-4 px-2">
        <h1 class="text-[30px] font-bold text-[#152544]">heylink.</h1>
      </div>
      <ul class="space-y-2 pl-4 font-medium">
        <li>
          <router-link
            to="/"
            class="flex items-center py-3 px-2 text-gray-900 rounded-lg hover:bg-[#E3F2FD]"
            :class="{ 'bg-[#E3F2FD]': $route.path === '/' }"
          >
            <img src="/src/assets/icons/dashboard.png" alt="dashboard" />
            <span class="ms-3 text-[#424242]">Dashboard</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/overview"
            class="flex items-center py-3 px-2 text-gray-900 rounded-lg hover:bg-[#E3F2FD]"
            :class="{ 'bg-[#E3F2FD]': $route.path === '/overview' }"
          >
            <img src="/src/assets/icons/overview.png" alt="overview" />
            <span class="ms-3 text-[#424242]">Overview</span>
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
  import { useRouter } from 'vue-router';

  const router = useRouter();
</script>
