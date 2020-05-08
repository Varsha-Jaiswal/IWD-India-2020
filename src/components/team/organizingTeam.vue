<template>

    <v-layout wrap align-start justify-start row fill-height class="pa-0">
<v-flex xs6
        sm4
        md2
        lg2
        v-for="(item,i) in ShuffleData(TeamDetails)"
        :key="i"
        class="text-xs-center team-wrapper team-mobile-card"
        style="text-align:center">
        <TeamDetailsDialog :data="{vdata:item}" />
      </v-flex>
    </v-layout>
</template>

<script>
import TeamDetails from "@/assets/data/organizingTeam.json";
import TeamDetailsDialog from "@/components/team/teamDetails";
export default {
  components: {
    TeamDetailsDialog
  },
  data() {
    return {
      TeamDetails: TeamDetails,
      showLoader: true,
      showData: false
    };
  },
  methods: {
    ShuffleData(TeamDetails) {
      let currentIndex = TeamDetails.length,
        temporaryValue,
        randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = TeamDetails[currentIndex];
        TeamDetails[currentIndex] = TeamDetails[randomIndex];
        TeamDetails[randomIndex] = temporaryValue;
      }
      return TeamDetails;
    }
  }
};
</script>
