<template>
  <v-container class="mb-0 pb-0">
    <v-layout wrap align-center justify-center row fill-height>
      <v-flex xs12 class="px-5">
        <v-layout row wrap class="pa-0">
          <v-flex
            xs6
            sm3
            md3
            lg2
            v-for="(item,i) in SpeakerData"
            :key="i"
            class="speaker-card speakers-wrapper"
            style="text-align:center"
          >
            <speakerDetails class :data="{vdata: item}" />
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import speakerData from "@/assets/data/speaker.json";
export default {
  components: {
    speakerDetails: () => import("@/components/common/SpeakerDetails")
  },
  data() {
    return {
      speakerData: speakerData
    };
  },
  computed: {
    SpeakerData: function() {
      function compare(a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      }
      return this.speakerData.slice().sort(compare);
    }
  }
  // methods: {
  //   ShuffleData(speakerData) {
  //     let currentIndex = speakerData.length,
  //       temporaryValue,
  //       randomIndex;
  //     while (0 !== currentIndex) {
  //       randomIndex = Math.floor(Math.random() * currentIndex);
  //       currentIndex -= 1;

  //       temporaryValue = speakerData[currentIndex];
  //       speakerData[currentIndex] = speakerData[randomIndex];
  //       speakerData[randomIndex] = temporaryValue;
  //     }
  //     return speakerData;
  //   }
  // }
};
</script>
