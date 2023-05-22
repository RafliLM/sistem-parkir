<style scoped>
  .v-list-item--active {
    color: black !important;
  }
</style>

<template>
  <v-app>
    <v-navigation-drawer color="#A8E4EF">
      <v-list>
        <v-list-item
          v-for="(page,index) in pages"
          :key="index"
          :value="page"
          active-color="#CBF6F8"
          :to="page.to"
        >
          <template v-slot:prepend>
            <v-icon :icon="page.icon"></v-icon>
          </template>

          <v-list-item-title>{{ page.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',

  data: () => ({
    pages : [
      {
        title : "Dashboard",
        icon : "mdi-monitor-dashboard",
        to : "/dashboard"
      },
      {
        title : "Pengaturan Zone",
        icon : "mdi-floor-plan",
        to : "/zone"
      },
      {
        title : "CCTV",
        icon : "mdi-cctv",
        to : "/cctv"
      },
      {
        title : "Laporkan Pelanggaran",
        icon : "mdi-alert",
        to : "/report"
      },
    ]
  }),
})
</script>
