<template>
  <table class="tbale-auto">
    <thead>
      <tr>
        <th>Id</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in data?.items">
        <td>{{ item.id }}</td>
        <td>{{ item.username }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
const { $api } = useNuxtApp();

const { data } = await $api.accounts.getAccounts();
</script>
