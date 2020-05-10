<template>
  <v-container fluid class="pa-0">
    <v-layout class="container pt-10 pl-0 pr-0">
      <v-btn-toggle v-model="selectedTab" tile color="blue accent-3" group mandatory>
        <v-btn class="mr-3 google-font" @click="selectScheduleTab">Schedule</v-btn>
        <v-btn @click="selectSessionTab" class="google-font">Sessions</v-btn>
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
      this.selectedTab = 1;
      this.schedule = false;
      this.session = true;
    },
    selectScheduleTab() {
      this.selectedTab = 0;
      this.schedule = true;
      this.session = false;
    }
  }
};
</script>
