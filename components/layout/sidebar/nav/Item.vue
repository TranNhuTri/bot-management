<script setup lang="ts">
const props = defineProps({ item: Object });
</script>

<template>
  <v-list-item
    :to="item?.to"
    rounded
    class="mb-1"
    color="primary"
    :disabled="item?.disabled"
    :target="item?.type === 'external' ? '_blank' : ''"
  >
    <template v-slot:prepend>
      <v-icon :icon="item.icon" v-if="item"></v-icon>
    </template>
    <v-list-item-title>{{ item?.title }}</v-list-item-title>
  </v-list-item>
</template>
