<template>
  <div class="flex flex-col justify-center items-center p-10 gap-2">
    <h1 class="text-[#080808] text-[24px] font-extrabold">Page Not Found :(</h1>
    <h1 class="text-[#080808]">
      Oops! 😖 The requested URL was not found on this server.
    </h1>
    <button
      @click="$router.push('/')"
      class="px-4 py-2 shadow-md text-[10px] text-center text-white bg-[#152544]"
    >
      Go Back Home
    </button>
    <img src="/src/assets/images/404.jpg" class="w-96 h-w-96" />
  </div>
</template>
