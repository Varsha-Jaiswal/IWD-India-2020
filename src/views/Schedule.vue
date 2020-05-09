<template>
  <v-content class="pa-0">
    <v-container fluid class="px-2">
      <v-layout row wrap align-center justify-center fill-height class="mt-0">
        <v-flex xs12 md10>
          <!-- <ScheduleHeader class="pa-0" /> -->
          <Schedule />
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  components: {
    // ScheduleHeader: () => import("@/components/schedule/header"),
    Schedule: () => import("@/components/schedule/schedule")
  }
};
</script>
