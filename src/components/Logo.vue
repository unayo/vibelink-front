<template>
  <svg :class="className" :width="size" :height="size" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25 35L45 70L65 35" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M45 70H75V55" stroke="#C5A059" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
    <circle cx="25" cy="25" r="5" fill="#C5A059" />
    <circle cx="35" cy="15" r="3" fill="#C5A059" opacity="0.6" />
  </svg>
</template>

<script setup lang="ts">
  defineProps({
    // 讓外部可以動態控制大小，預設 32px
    size: {
      type: [String, Number],
      default: 32,
    },
    // 讓外部可以傳入 Tailwind CSS 類名
    className: {
      type: String,
      default: 'text-slate-100',
    },
  });
</script>
