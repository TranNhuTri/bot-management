<template>
    <v-navigation-drawer left elevation="0"  app class="leftSidebar"  v-model="sDrawer">
        <div>
            <perfect-scrollbar class="scrollnavbar">
                <v-list class="pa-6">
                    <template v-for="(item, i) in sidebarMenu">
                        <LayoutSidebarNavGroup :item="item" v-if="item.header" :key="item.title" />
                        <LayoutSidebarNavItem :item="item" v-else class="leftPadding" />
                    </template>
                </v-list>
            </perfect-scrollbar>
        </div>
    </v-navigation-drawer>
    <v-app-bar elevation="0" height="70">
        <div class="d-flex align-center justify-space-between w-100">
            <div>
                <v-btn class="hidden-lg-and-up ms-md-3 ms-sm-5 ms-3 text-muted" @click="sDrawer = !sDrawer" icon variant="flat"
                    size="small">
                    <Menu2Icon size="20"/>
                </v-btn>
            </div>
            <div>
                <LayoutHeaderProfile />
            </div>
        </div>
    </v-app-bar>
</template>

<script setup lang="ts">
import { ref, shallowRef } from 'vue';
import { Menu2Icon } from 'vue-tabler-icons';
import sidebarItems from '~/components/layout/sidebar/sidebarItems';
const sidebarMenu = shallowRef(sidebarItems);
const sDrawer = ref(true);
</script>