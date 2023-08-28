<template>
  <h1>{{ data?.items.length }}</h1>
</template>

<script setup lang="ts">
const { $api } = useNuxtApp();

const { data } = await $api.accounts.getAccounts();
</script>
