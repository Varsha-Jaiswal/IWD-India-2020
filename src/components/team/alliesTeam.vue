<template>
  <v-layout wrap align-start justify-center row fill-height class="pa-0">
    <v-flex
      xs6
      sm4
      md2
      lg2
      v-for="(item,i) in TeamData"
      :key="i"
      class="text-xs-center team-wrapper"
      style="text-align:center"
    >
      <TeamDetailsDialog :data="{vdata:item}" />
    </v-flex>
  </v-layout>
</template>

<script>
import TeamDetails from "@/assets/data/allies.json";
export default {
  components: {
    TeamDetailsDialog: () => import("@/components/team/teamDetails")
  },
  data() {
    return {
      TeamDetails: TeamDetails,
      showLoader: true,
      showData: false
    };
  },
  computed: {
    TeamData: function() {
      function compare(a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      }
      return this.TeamDetails.slice().sort(compare);
    }
  }
};
</script>
