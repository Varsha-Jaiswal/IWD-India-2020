<template>
  <v-container fluid class="pa-0">
    <v-layout class="pa-10">
      <v-btn-toggle v-model="selectedTab" tile color="blue accent-3" group>
        <v-btn class="mr-3 ml-10" @click="selectScheduleTab">Schedule</v-btn>
        <v-btn @click="selectSessionTab">Session</v-btn>
      </v-btn-toggle>
    </v-layout>
    <Schedule v-if="schedule" />
    <Sessions v-if="session" />
  </v-container>
</template>

<script>
export default {
  components: {
    Schedule: () => import("@/views/Schedule"),
    Sessions: () => import("@/views/Sessions")
  },
  data() {
    return {
      schedule: false,
      session: false,
      selectedTab: 0
    };
  },
  mounted() {
    this.schedule = true;
  },
  methods: {
    selectSessionTab() {
      this.schedule = false;
      this.session = true;
    },
    selectScheduleTab() {
      this.schedule = true;
      this.session = false;
    }
  }
};
</script>
