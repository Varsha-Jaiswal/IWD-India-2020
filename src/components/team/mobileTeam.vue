<template>
  <!-- <v-card class="elevation-0"> -->
    <!-- <v-card flat class="px-4 elevation-0 mb-4"> -->
      <organizingTeam />
    <!-- </v-card> -->
  <!-- </v-card> -->
</template>

<script>
import organizingTeam from "@/components/team/mobile/organizingTeam";

export default {
  components: {
    organizingTeam
  },
  data() {
    return {
      tab: null,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };
  }
};
</script>